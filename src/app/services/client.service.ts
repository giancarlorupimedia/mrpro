import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,private generalS: GeneralService, private sessionS: SessionService) { }

  getClients() {
    var header = this.generalS.getToken({}, "application/json");
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_DASHBOARD_CLIENTS, header);
  }

  getExportExcelClients() {
    var header = {headers: {
      Authorization: this.sessionS.getObject("token").token_type + " " + this.sessionS.getObject("token").access_token
      },
      responseType: 'blob' as 'json',
    };
    return this.http.get(AppSettings.BASE_PATH + AppSettings.GET_EXPORT_EXCEL_CLIENT, header);
  }

  getOneClient(clientID: string) {
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.GET_ONE_DASHBOARD_CLIENT}/${clientID}`;
    return this.http.get(url, header);
  }

  postCreateClient(params) {
    const obj = {
      name: params.name,
      lastname: params.lastname,
      email: params.email,
      password: params.password,
      password_confirmation: params.password_confirmation,
      phone: params.phone,
      image: (params.image == undefined)? "" : params.image,
      doc_number: params.doc_number
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    
    var header = this.generalS.getToken({}, "application/json");

    return this.http.post(AppSettings.BASE_PATH + AppSettings.POST_CREATE_DASHBOARD_CLIENT, body, header);
  }

  postSetStatusClient(params) {
    const obj = {
      status: params.status
    };
    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/json");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_CREATE_DASHBOARD_CLIENT}/${params.client_id}`;
    return this.http.put(url, body, header);
  }

  putUpdateClient(params){
    let obj = {};
    if(params.contrasena == undefined || params.contrasena == null || params.contrasena == ""){
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        phone: params.phone,
        image: (params.image == undefined)? "" : params.image,
        doc_number: params.doc_number
      };
    }else{
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
        password_confirmation: params.password_confirmation,
        phone: params.phone,
        image: (params.image == undefined)? "" : params.image,
        doc_number: params.doc_number
      };
    }

    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    const url = `${AppSettings.BASE_PATH}${AppSettings.PUT_CREATE_DASHBOARD_CLIENT}/${params.id}`;
    return this.http.put(url, body, header);
  }

  postUpdateClientProfile(params){
    let obj = {};
    if(params.password == undefined || params.password == null || params.password == ""){
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        phone: params.phone,
        image: (params.image == undefined)? "" : params.image,
        doc_number: params.doc_number
      };
    }else{
      obj = {
        name: params.name,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
        password_confirmation: params.password_confirmation,
        phone: params.phone,
        image: (params.image == undefined)? "" : params.image,
        doc_number: params.doc_number
      };
    }

    console.log(obj);
    const body = new HttpParams({
      fromObject: obj
    });
    var header = this.generalS.getToken({}, "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.BASE_PATH + AppSettings.UPDATE_CLIENT, body, header);
  }
}
