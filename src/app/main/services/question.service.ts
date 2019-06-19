import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs/Observable';
import {Response} from '../../core/models/response.model';
import {Question} from '../models/question.model';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

@Injectable()
export class QuestionService {
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.apiConfig.apiUrl;
  }


  saveQuestion(question: any): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(`${this.urlApi}/questionsr`, question, {headers: headers});
  }

  getLisQuestion(page: number, pageSize: number): Observable<Response<Array<any>>> {
    return this.httpClient.get<Response<Array<any>>>(`${this.urlApi}/questionsr/paged-list?page=${page}&size=${pageSize}`,{headers: headers});
  }
  dropQuestion(idQuestion: number): Observable<Response<any>> {
    return this.httpClient.delete<Response<any>>(`${this.urlApi}/questionsr/${idQuestion}`, {headers: headers});
  }
  editQuestion(question: Question, idQuestion: number): Observable<Response<any>> {
    return this.httpClient.put<Response<any>>(`${this.urlApi}/questionsr/${idQuestion}`, question, {headers: headers});
  }
  getQuestion(idQuestion: string): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/questionsr/${idQuestion}`, {headers: headers});
  }
  getPageableListQuestion(page: number, pageSize: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/questionsr/paged-list?page=${page}&size=${pageSize}`,{headers: headers});
  }






}
