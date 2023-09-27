import { Component, OnInit } from '@angular/core';
import { DataService } from '../provider/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../provider/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dataService: DataService, private router: Router, private authService: AuthService, private formBulder: FormBuilder) { }

  taskForm = this.formBulder.group({
    'title': [''],
    'description': ['']
  })

  createTask(task: FormGroup): void {
    const { value } = task
    console.log('INPUT VALUES', value);
  }

  tasks: any[] = []
  isLoading: boolean = false
  getAllTasks(): void {
    this.authService._loggedUser$.subscribe({
      next: (value) => {
        console.log(value);
        this.dataService.getAllUserTasks(value.id).subscribe({
          next: (res) => {
            this.tasks = res.tasks
            console.log(res.tasks[0]);

          },
          error: (err) => {
            console.log(err);
          }
        })
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  logOut(): void {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.router.navigate(['/login'])
    }, 1500);

  }

  isModalOpen: boolean = false
  openModal(): void {
    this.isModalOpen = true
  }

  onModalCancel() {
    this.isModalOpen = false
  }


  ngOnInit(): void {
    this.getAllTasks()
  }

}
