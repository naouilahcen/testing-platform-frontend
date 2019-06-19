import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs/Observable';
import {Response} from '../../core/models/response.model';
import {Exam} from '../models/exam.model';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

@Injectable()
export class ExamService {
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.apiConfig.apiUrl;
  }


  saveExam(exam: Exam): Observable<Response<Exam>> {
    return this.httpClient.post<Response<Exam>>(`${this.urlApi}/exams`, exam, {headers: headers});
  }

  getLisExam(): Observable<Response<Array<Exam>>> {
    return this.httpClient.get<Response<Array<Exam>>>(`${this.urlApi}/exams`,{headers: headers});
  }
  dropExam(idExam: number): Observable<Response<any>> {
    return this.httpClient.delete<Response<any>>(`${this.urlApi}/exams/${idExam}`, {headers: headers});
  }
  editExam(exam: Exam, idQuestion: number): Observable<Response<any>> {
    return this.httpClient.put<Response<any>>(`${this.urlApi}/exams/${idQuestion}`, exam, {headers: headers});
  }
  getExam(idExam: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/exams/${idExam}`, {headers: headers});
  }
  getPageableListExam(page: number, pageSize: number): Observable<Response<any>> {
    return this.httpClient.get<Response<any>>(`${this.urlApi}/exams/paged-list?page=${page}&size=${pageSize}`,{headers: headers});
  }






}
