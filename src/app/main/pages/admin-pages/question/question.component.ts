import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuestionService} from '../../../services/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Question} from '../../../models/question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;

  protected formQuestion: FormGroup;
  isSubmitted = false;

  constructor(
    private questionservice: QuestionService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formQuestion = this.formBuilder.group({
      enonce: [''],
      description: ['']
      // responseDto: ['']


    });
  }


  get enonce() {
    return this.formQuestion.get('enonce');
  }

  get description() {
    return this.formQuestion.get('description');
  }

  /*get responseDto() {
    return this.formQuestion.get('responseDto');
  }*/

  ngOnInit() {
    this.getQuestion();

  }



  /*  addQuestion(formQuestion: FormGroup) {debugger;
     const labelle = _.omit(this.formQuestion.value);
      this.questionservice.saveQuestion(labelle).subscribe(response => {
        this.toastrService.success('added');

      }, err => {
        console.log(err);
      });
    }*/

  getQuestion() {
    const id: string = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.questionservice.getQuestion(id).subscribe(response => {
        if (response && response.data) {
          this.question = response.data;
          this.loadQuestion(response.data);
        }
      }, (err) => {
      });
    }
  }


  loadQuestion(data) {
    this.formQuestion.controls.enonce.setValue(data.enonce);
    this.formQuestion.controls.description.setValue(data.description);
    // this.formQuestion.controls.responseDto.setValue(data.responseDto);

  }

  addQuestion(formQuestion): void {
    if (!this.formQuestion.invalid) {
      this.isSubmitted = true;
      const question = _.omit(this.formQuestion.value);
      if (this.question && this.question.id) {
        question.id = this.question.id;
        this.questionservice.editQuestion(question, question.id).subscribe((response) => {
          if (response) {
            this.toastrService.success('question has been modified', '');
            this.router.navigate(['/admin/questions']);
          }
        }, (err) => {

        });
      } else {
        this.questionservice.saveQuestion(question).subscribe((response) => {
          if (response) {
            debugger;
            this.toastrService.success('question has been added', '');
            this.router.navigate(['/admin/questions']);
          }
        }, (err) => {
        });
      }
    }
  }


}
