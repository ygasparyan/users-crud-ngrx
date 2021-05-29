import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { User } from '@models';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetch users from api
   */
  public usersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  /**
   * Fetch user by id from api
   * @param userId - user id
   */
  public fetchUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  /**
   * Add new user
   * @param user - added user
   */
  public addUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  /**
   * Update user data
   * @param user - updated user
   */
  public updateUser(user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users`, user);
  }

  /**
   * Remove user
   * @param userId - id to delete
   */
  public removeUser(userId: string): Observable<User> {
    return this.http.delete<User>((`${this.apiUrl}/users/${userId}`));
  }

}
