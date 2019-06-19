import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Exam} from '../../models/exam.model';
import {ExamService} from '../../services/exam.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-examinations-pages',
  templateUrl: './examinations-pages.component.html',
  styleUrls: ['./examinations-pages.component.scss']
})
export class ExaminationsPagesComponent implements OnInit {


  isUpdate = false;
  protected exams: Exam[];
  protected exam: Exam = new Exam();
  protected pageSize;
  protected page;
  protected totalElements: number;
  protected totalPages: number;
  protected numberOfItems: number;
  protected itemsPerPage: number;

  protected formExam: FormGroup;
  isSubmitted = false;
  protected keyword: string;

  constructor(
    private examservice: ExamService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formExam = this.formBuilder.group({
      title: [''],
      description: [''],
      nbrOfQuestions: [''],
      id_examNature: [''],
    });
  }


  get title() {
    return this.formExam.get('title');
  }

  get description() {
    return this.formExam.get('description');
  }
  get nbrOfQuestions() {
    return this.formExam.get('nbrOfQuestions');
  }

  get id_examNature() {
    return this.formExam.get('id_examNature');
  }

  getFormValues() {
    this.exam.title = this.formExam.controls.title.value;
    this.exam.description = this.formExam.controls.description.value;
    this.exam.nbrOfQuestions = this.formExam.controls.nbrOfQuestions.value;
    this.exam.id_examNature = this.formExam.controls.id_examNature.value;
  }

  setFormValues() {
    this.title.setValue(this.exam.title);
    this.description.setValue(this.exam.description);
    this.nbrOfQuestions.setValue(this.exam.nbrOfQuestions);
    this.id_examNature.setValue(this.exam.id_examNature);
  }

  cleanFormValues() {
    this.title.setValue('');
    this.description.setValue('');
    this.nbrOfQuestions.setValue('');
    this.id_examNature.setValue('');
  }

  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listExam();
  }


  isNotUpdate() {

    this.isUpdate = false ;
    this.cleanFormValues();
  }

  getExam(idExam: number) {
    this.isUpdate = true ;
    // const id: string = this.route.snapshot.paramMap.get('id');


      this.examservice.getExam(idExam).subscribe(response => {
        if (response && response.data) {
          this.exam = response.data;
          this.setFormValues();
        }
      }, (err) => {
      });


   /* this.examservice.getLisExam(this.page, this.pageSize).subscribe(response => {
      this.exams = response.data;
    }, err => {
    });*/
  }

/*
  loadExam(data) {
    this.formExam.controls.title.setValue(data.title);
    this.formExam.controls.description.setValue(data.description);
    this.formExam.controls.nbrOfQuestions.setValue(data.nbrOfQuestions);

  }*/



  addExam(formExam): void {
    this.getFormValues();
    if (!this.formExam.invalid) {
      this.isSubmitted = true;
      const exam = _.omit(this.formExam.value);
      if (this.exam && this.exam.id) {
        exam.id = this.exam.id;
        this.examservice.editExam(exam, exam.id).subscribe((response) => {
          if (response) {
            this.toastrService.success('exam has been modified', '');
        this.listExam();
          }
        }, (err) => {

        });
      } else {
        this.examservice.saveExam(this.exam).subscribe((response) => {
          if (response) {
            this.toastrService.success('exam has been added', '');
            this.listExam();
          }
        }, (err) => {
        });
      }
    }
  }
  dropExam(idExam: number): void {
    swal({
      title: 'Etes-vous sûr de vouloir continuer',
      text: 'Cette action est irréversible ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#39d639',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Je suis sûr!'
    }).then((result) => {
      if (result.value) {
        this.examservice.dropExam(idExam).subscribe((response) => {

          this.toastrService.success('exam has been deleted', '');
          // this.getQuestion();
          /*this.pageChanged(-1);
          this.listQuestion();*/
          this.pageChanged(-1);
          this.listExam();
        }, (err) => {
        });
      }
    });
  }

  /*getListExam() {
    this.examservice.getLisExam().subscribe(res => {
      this.exams = res.data;

    });
  }*/



  listExam() {
    this.exams = [];
    this.examservice.getPageableListExam(this.page, this.pageSize).subscribe(response => {
      this.exams = response.data['content'];
      this.totalElements = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }

  pageChanged(page: number): void {
    this.page = page;
    this.listExam();
  }

}
