import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response} from '../../core/models/response.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Profile} from '../models/profile.model';
import {User} from '../models/user.model';
import {Setting} from '../models/setting.model';
import {Question} from '../models/question.model';
import {Product} from '../models/product.model';
import {Category} from '../models/category.model';


let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');


@Injectable()
export class AdminService {
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.apiConfig.apiUrl;
  }

// question
  saveQuestion(question: Question): Observable<Response<Question>> {
    return this.httpClient.post<Response<Question>>(`${this.urlApi}/questions`, question, {headers: headers});
  }

  getQuestion(idQuestion: number): Observable<Response<Question>> {
    return this.httpClient.get<Response<Question>>(`${this.urlApi}/questions/${idQuestion}`, {headers: headers});
}

  getListQuestion(): Observable<Response<Array<any>>> {
    return this.httpClient.get<Response<Array<any>>>(`${this.urlApi}/question/getall`, {headers: headers});
  }

  dropQuestions(idQuestion: number): Observable<Response<any>> {
    return this.httpClient.delete<Response<any>>(`${this.urlApi}/questions/${idQuestion}`, {headers: headers});
  }

  editQuestion(question: Question, idQuestion: number): Observable<Response<any>> {
    return this.httpClient.put<Response<any>>(`${this.urlApi}/questions/${idQuestion}`, question, {headers: headers});
  }

  getPageableListQuestion(page?: number, pageSize?: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/questions/paged-list?page=${page }&size=${pageSize}`, {headers: headers});
  }

  // Profiles
  getListProfiles(): Observable<Response<Array<Profile>>> {
    return this.httpClient.get<Response<Array<Profile>>>(`${this.urlApi}/profiles`);
  }

  getPageableListProfiles(page: number, pageSize: number, keyword?: string): Observable<Response<any>> {
    if (keyword) {
      return this.httpClient.get<Response<any>>(`${this.urlApi}/profiles-list?page=${page}&size=${pageSize}&keyword=${keyword}`);
    } else {
      return this.httpClient.get<Response<any>>(`${this.urlApi}/profiles-list?page=${page}&size=${pageSize}`);
    }
  }

  dropProfile(idProfile: number) {
    return this.httpClient.post(`${this.urlApi}/profiles/${idProfile}/delete`, null, {headers: headers});
  }

  saveProfile(profile: Profile) {
    return this.httpClient.post(`${this.urlApi}/profile/save`, profile, {headers: headers});
  }

  getProfile(idProfile: string): Observable<Response<Profile>> {
    return this.httpClient.get<Response<Profile>>(`${this.urlApi}/profiles/${idProfile}/find`, {headers: headers});
  }

  // Users
  getListUser(pageNo: number, countNo: number): Observable<Response<Array<User>>> {
    return this.httpClient.get<Response<Array<User>>>(`${this.urlApi}/users/paged-list?page=${pageNo}&size=${countNo}`, {headers: headers});
  }

  dropUser(idUser: number): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.urlApi}/users/${idUser}/delete`, null, {headers: headers});
  }

  createUser(user: User): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.urlApi}/users/save`, user, {headers: headers});
  }

  enableUser(idUser: number): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.urlApi}/users/${idUser}/enable`, null, {headers: headers});
  }

  disableUser(idUser: number): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.urlApi}/users/${idUser}/disable`, null, {headers: headers});
  }

  editUser(user: User): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(`${this.urlApi}/users/edit`, user, {headers: headers});
  }

  getUser(idUser: string): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${this.urlApi}/users/${idUser}/find`, {headers: headers});
  }

  getProfileAuthorities(id: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/profiles/${id}/authorities`, {headers: headers});
  }

  /**
   * Settings
   */
  getSettings(): Observable<Response<Array<Setting>>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/settings`);
  }

  saveSettings(settings: Array<Setting>): Observable<Response<Array<Setting>>> {
    return this.httpClient.put<Response<Array<Setting>>>(`${this.urlApi}/settings`, settings, {headers: headers});
  }


  /** ---------------------------------------------- categorie------------------------*/
  // category
  saveCategory(category: Category): Observable<Response<Category>> {
    return this.httpClient.post<Response<Question>>(`${this.urlApi}/category`, category, {headers: headers});
  }

  getCategory(idCategory: number): Observable<Response<Category>> {
    return this.httpClient.get<Response<Category>>(`${this.urlApi}/category/${idCategory}`, {headers: headers});
  }
  getListCategory(): Observable<Response<Array<Category>>> {
    return this.httpClient.get<Response<Array<Category>>>(`${this.urlApi}/category`, {headers: headers});
  }

  dropCategorys(idCategory: number): Observable<Response<any>> {
    return this.httpClient.delete<Response<any>>(`${this.urlApi}/category/${idCategory}`, {headers: headers});
  }

  editCategory(category: Category, idCategory: number): Observable<Response<any>> {
    return this.httpClient.put<Response<any>>(`${this.urlApi}/category/${idCategory}`, category, {headers: headers});
  }

  getPageableListCategory(page?: number, pageSize?: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/category/paged-list?page=${page }&size=${pageSize}`, {headers: headers});
  }
  /** ---------------------------------------------- produts------------------------*/
  // product
  saveProduct(product: Product): Observable<Response<Product>> {
    return this.httpClient.post<Response<Product>>(`${this.urlApi}/products`, product, {headers: headers});
  }

  getProduct(idProduct: number): Observable<Response<Product>> {
    return this.httpClient.get<Response<Product>>(`${this.urlApi}/products/${idProduct}`, {headers: headers});
  }
  getListProduct(): Observable<Response<Array<any>>> {
    return this.httpClient.get<Response<Array<any>>>(`${this.urlApi}/products/getall`, {headers: headers});
  }

  dropProducts(idProduct: number): Observable<Response<any>> {
    return this.httpClient.delete<Response<any>>(`${this.urlApi}/products/${idProduct}`, {headers: headers});
  }

  editProduct(product: Product, idProduct: number): Observable<Response<any>> {
    return this.httpClient.put<Response<any>>(`${this.urlApi}/products/${idProduct}`, product, {headers: headers});
  }

  getPageableListProduct(page?: number, pageSize?: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/products/paged-list?page=${page}&size=${pageSize}`, {headers: headers});
  }
}
