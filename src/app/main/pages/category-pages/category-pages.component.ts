import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/question.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {ToastrService} from 'ngx-toastr';
import {UtilsService} from '../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../models/category.model';
import swal from 'sweetalert2';
import * as  _ from 'underscore';

@Component({
  selector: 'app-category-pages',
  templateUrl: './category-pages.component.html',
  styleUrls: ['./category-pages.component.scss']
})
export class CategoryPagesComponent implements OnInit {

  category: Category = new Category();
  formCategory: FormGroup;
  isSubmitted = false;
  isUpdate = false;

  protected categories: Category[];
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
    this.formCategory = this.formBuilder.group({
      nomCategory: ['', Validators.required]

    });
  }

  get nomCategory() {
    return this.formCategory.get('nomCategory');
  }

  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listCategory();
  }

  isNotUpdate() {
    this.isUpdate = false;
    this.cleanFormValues();
  }

  pageChanged(page: number): void {
    this.page = page;
    this.listCategory();
  }

  setFormValues() {

    this.nomCategory.setValue(this.category.nomCategory);
  }

  cleanFormValues() {

    this.nomCategory.setValue('');
  }


  listCategory() {
    this.categories = [];
    this.adminService.getPageableListCategory(this.page, this.pageSize).subscribe(response => {
      this.categories = response.data['content'];
      this.totalElements = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }


  dropCategory(idCategory: number): void {
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
        this.adminService.dropCategorys(idCategory).subscribe((response) => {
          this.toastrService.info('deleted', '');
          this.listCategory();
        }, (err) => {
        });
      }
    });
  }

  getCategory(idCategory: number) {
    this.isUpdate = true;
    /*const id: string = this.route.snapshot.paramMap.get('id');*/
    this.adminService.getCategory(idCategory).subscribe(response => {
      if ( response.data) {
        this.category = response.data;
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

  addCategorys() {
    if (!this.formCategory.invalid) {
      this.isSubmitted = true;
      const category = _.omit(this.formCategory.value);
      if (this.category && this.category.id) {
        category.id = this.category.id;
        this.adminService.editCategory(category, category.id).subscribe((response) => {
          this.listCategory();
          if (response) {
            this.toastrService.success('updated', '');
          }
        }, (err) => {

        });
      } else {
        this.adminService.saveCategory(category).subscribe((response) => {
          this.toastrService.success('added');
          this.listCategory();
        }, (err) => {
        });
      }
    }
  }
}
