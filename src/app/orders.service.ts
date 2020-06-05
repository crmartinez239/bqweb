import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  bqUrl = 'http://10.0.0.8:8080'
  response = '';
  id = 0;

  constructor(private http: HttpClient) { }
  
  getOrders() {
    return this.http.get(`${this.bqUrl}/orders`)
  }

  getOrderById(id: string) {
    return this.http.get(`${this.bqUrl}/orders/${id}`)
  }

  sendOrder(type: string, name: string) {
    return this.http.post<any>(`${this.bqUrl}/orders`, {type: type, name: name})
  }

  clearOrders() {
    this.http.delete(`${this.bqUrl}/orders`).subscribe({
      next: () => this.response = 'success',
      error: error => this.response = error
    })
    return this.response;
  }
}
