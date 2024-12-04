import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);
  title = 'datingapp';
  users : any;

ngOnInit():void{
  this.http.get("http://localhost:5152/api/users").subscribe({
    next:response=> this.users=response,
    error:error=>console.log(error),
    complete:()=>console.log('requiest has been completed!!!')
  });
}
}
