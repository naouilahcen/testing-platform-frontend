import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {ToastrService} from 'ngx-toastr';
import {UtilsService} from '../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';
import swal from 'sweetalert2';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent implements OnInit {
  product: Product = new Product();
  formProduct: FormGroup;
  isSubmitted = false;
  isUpdate = false;
  categories: Array<Category>;
  protected idCat: number;
  protected products: Product[];
  protected disabled = false;
  protected page;
  protected pageSize;
  protected totalElements: number;
  protected selectedCategory: number;
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
    this.formProduct = this.formBuilder.group({
      designation: [''],
      prix: [''],
      category: ['']

    });
  }

  get designation() {
    return this.formProduct.get('designation');
  }

  get prix() {
    return this.formProduct.get('prix');
  }

  get category() {
    return this.formProduct.get('category');
  }

  ngOnInit() {
    this.pageSize = 5;
    this.page = 0;
    this.keyword = '';
    this.listProduct();
    this.listCategories();
  }

  isNotUpdate() {
    this.isUpdate = false;
    this.cleanFormValues();
  }

  pageChanged(page: number): void {
    this.page = page;
    this.listProduct();
  }

  setFormValues() {
    this.designation.setValue(this.product.designation);
    this.prix.setValue(this.product.prix);
    this.category.setValue(this.product.category);
  }

  cleanFormValues() {
    this.designation.setValue('');
    this.prix.setValue('');
    this.category.setValue('');
  }


  listProduct() {
    this.products = [];
    this.adminService.getPageableListProduct(this.page, this.pageSize).subscribe(response => {
      this.products = response.data['content'];
      this.totalElements = response.data['totalElements'];
      this.totalPages = response.data['totalPages'];
      this.itemsPerPage = response.data['size'];
      this.numberOfItems = response.data['numberOfElements'];
    }, err => {
    });
  }

  listCategories() {
    this.adminService.getListCategory().subscribe(response => {
      this.categories = response.data;
    }, err => {
    });
  }

  onSelectCat(id: number) {
    this.idCat = id;
  }


  dropProduct(idProduct: number): void {
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
        this.adminService.dropProducts(idProduct).subscribe((response) => {
          this.toastrService.info('deleted', '');
          this.listProduct();
        }, (err) => {
        });
      }
    });
  }

  getProduct(idProduct: number) {
    this.isUpdate = true;
    /*const id: string = this.route.snapshot.paramMap.get('id');*/
    this.adminService.getProduct(idProduct).subscribe(response => {
      if (response.data) {
        this.product = response.data;
        this.setFormValues();
      }
    }, (err) => {
    });
  }

  addProucts() {
    if (!this.formProduct.invalid) {
      this.isSubmitted = true;

      const product = new Product();
      const category = new Category();
      category.id = this.idCat;
      product.category = category;
      product.designation = this.formProduct.get('designation').value;
      product.prix = this.formProduct.controls.prix.value;

      product.category.id = this.selectedCategory;
      if (this.product && this.product.id) {
        product.id = this.product.id;
        this.adminService.editProduct(product, product.id).subscribe((response) => {
          this.listProduct();
          if (response) {
            this.toastrService.success('updated', '');
          }
        }, (err) => {

        });
      } else {
        this.adminService.saveProduct(product).subscribe((response) => {
          this.toastrService.success('added');
          this.listProduct();
        }, (err) => {
        });
      }
    }
  }

}
