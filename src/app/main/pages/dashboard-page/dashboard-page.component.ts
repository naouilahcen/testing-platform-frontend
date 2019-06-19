import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category.model';
import {AdminService} from '../../services/admin.service';
import {ToastrService} from 'ngx-toastr';
import {UtilsService} from '../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {


  product: Product = new Product();
  protected categories: Category[];
  protected products: Product[];
  protected questions: Product[];
  protected disabled = false;
  protected page;
  protected pageSize;
  protected totalElementsProd: number;
  protected totalElementsCat: number;
  protected totalElementsQuest: number;
  protected totalPages: number;
  protected numberOfItems: number;
  protected itemsPerPage: number;
  protected keyword: string;

  constructor(private adminService: AdminService,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listProduct();
    this.listCategory();
    this.listQuestion();
  }


  listProduct() {
    this.products = [];
    this.adminService.getPageableListProduct(this.page, this.pageSize).subscribe(response => {
      this.products = response.data['content'];
      this.totalElementsProd = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }
    listCategory() {
      this.categories = [];
      this.adminService.getPageableListCategory(this.page, this.pageSize).subscribe(response => {
        this.categories = response.data['content'];
        this.totalElementsCat = response.data['totalElements'];
        this.totalPages = response.data['totalPages'];
        this.itemsPerPage = response.data['size'];
        this.numberOfItems = response.data['numberOfElements'];
      }, err => {
      });
    }

  listQuestion() {
    this.questions = [];
    this.adminService.getPageableListQuestion(this.page, this.pageSize).subscribe(response => {
      this.questions = response.data['content'];
      this.totalElementsQuest = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }

}
