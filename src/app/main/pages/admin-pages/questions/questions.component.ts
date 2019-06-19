import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {QuestionService} from '../../../services/question.service';
import {FormBuilder} from '@angular/forms';
import swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  modalForm;
  protected questions: Question[];
  protected question: Question;
  protected pageSize;
  protected page;
  protected totalElements: number;
  protected totalPages: number;
  protected numberOfItems: number;
  protected itemsPerPage: number;

  protected keyword: string;


  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private toastrService: ToastrService) {


    this.modalForm = this.formBuilder.group({
      enonce: [],
      description: []
        // reponseDto: []
      }
    );
  }


  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listQuestion();

  }
  pageChanged(page: number): void {
    this.page = page;
    this.listQuestion();
  }


  getQuestion() {
    this.questionService.getLisQuestion(this.page, this.pageSize).subscribe(response => {
      this.questions = response.data;
    }, err => {
    });
  }

  listQuestion() {
     this.questions = [];
     this.questionService.getPageableListQuestion(this.page, this.pageSize).subscribe(response => {
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
      text: 'Cette action est irréversible motherfucker',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#39d639',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Je suis sûr!'
    }).then((result) => {
      if (result.value) {
        this.questionService.dropQuestion(idQuestion).subscribe((response) => {

          this.toastrService.success('question has been deleted', '');
         // this.getQuestion();
          this.pageChanged(-1);
          this.listQuestion();
        }, (err) => {
        });
      }
    });
  }
}
