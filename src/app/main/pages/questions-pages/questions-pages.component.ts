import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ToastrService} from 'ngx-toastr';
import {Question} from '../../models/question.model';
import swal from 'sweetalert2';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UtilsService} from '../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as  _ from 'underscore';


@Component({
  selector: 'app-questions-pages',
  templateUrl: './questions-pages.component.html',
  styleUrls: ['./questions-pages.component.scss']
})
export class QuestionsPagesComponent implements OnInit {
  question: Question = new Question();
  formQuestion: FormGroup;
  isSubmitted = false;
  isUpdate = false;

  protected questions: Question[];
  protected disabled = false;
  protected page;
  protected pageSize;
  protected totalElements: number;
  protected totalPages: number;
  protected numberOfItems: number;
  protected itemsPerPage: number;
  protected keyword: string;

  constructor(private adminService: AdminService,
              private toastrService: ToastrService,
              private utilsService: UtilsService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.formQuestion = this.formBuilder.group({
      enonce: [''],
      description: [''],


    });
  }

  get enonce() {
    return this.formQuestion.get('enonce');
  }

  get description() {
    return this.formQuestion.get('description');
  }

  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listQuestion();
  }

  isNotUpdate() {
    this.isUpdate = false;
    this.cleanFormValues();
  }

  pageChanged(page: number): void {
    this.page = page;
    this.listQuestion();
  }

  setFormValues() {

    this.enonce.setValue(this.question.enonce);
    this.description.setValue(this.question.description);
  }

  cleanFormValues() {

    this.enonce.setValue('');
    this.description.setValue('');
  }


  listQuestion() {
    this.questions = [];
    this.adminService.getPageableListQuestion(this.page, this.pageSize).subscribe(response => {
      this.questions = response.data['content'];
      this.totalElements = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }


  dropQuestion(idQuestion: number): void {
    swal({
      title: 'Etes-vous sûr de vouloir continuer',
      text: 'Cette action est irréversible',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#006dd1',
      cancelButtonColor: '#ee0010',
      confirmButtonText: 'Oui, Je suis sûr!'
    }).then((result) => {
      if (result.value) {
        this.adminService.dropQuestions(idQuestion).subscribe((response) => {
          this.toastrService.info('deleted', '');
          this.listQuestion();
        }, (err) => {
        });
      }
    });
  }

  getQuestion(idQuestion: number) {
    this.isUpdate = true;
    /*const id: string = this.route.snapshot.paramMap.get('id');*/
    this.adminService.getQuestion(idQuestion).subscribe(response => {
      if (response && response.data) {
        this.question = response.data;
        this.setFormValues();
      }
    }, (err) => {
    });
  }


  /* addQuestion(): void {
     const ques = _.omit(this.formQuestion.value);
     this.adminService.saveQuestion(ques).subscribe((response) => {
       this.toastrService.success('added');
     }, err => {
       console.log(err);
     });
   }*/

  addQuestions() {
    if (!this.formQuestion.invalid) {
      this.isSubmitted = true;
      const question = _.omit(this.formQuestion.value);
      if (this.question && this.question.id) {
        question.id = this.question.id;
        this.adminService.editQuestion(question, question.id).subscribe((response) => {
          this.listQuestion();
          if (response) {
            this.toastrService.success('updated', '');
          }
        }, (err) => {

        });
      } else {
        this.adminService.saveQuestion(question).subscribe((response) => {
          this.toastrService.success('added');
          this.listQuestion();
        }, (err) => {
        });
      }
    }
  }
}
