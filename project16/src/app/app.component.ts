import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { BaseService } from './shared/service/base.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Employees Database';
  workers: MyWorker[];
  myType = MyWorkerType;
  isLoaded = false;
  filter = '';

  constructor(private BaseService: BaseService) {
  }

  ngOnInit() {
    this.data().then(() => {
      this.isLoaded = true;
    });
  }

  onDeleteWorker(id: number) {
    try {
      this.BaseService.deleteWorker(id);
      console.log ('delete successful!')
    } catch (err) {
      console.log('ERROR : ' + err);
    } finally {
      this.data();
    }
  }

  change() {
    document.getElementById('main').classList.toggle('change-mode');
    document.getElementById('second').classList.toggle('second');
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }

  async onAddWorker(worker: MyWorker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    try {
      await this.BaseService.postWorker(worker);
    } catch (err) {
      console.log('ERROR : ' + err);
    } finally {
      this.data();
    }
  }

  async onSaveWorker(worker: MyWorker) {
    try {
      await this.BaseService.saveWorker(worker);
    } catch (err) {
      console.log('ERROR : ' + err);
    }
  }

  async data() {
    try {
      this.workers = await this.BaseService.getWorkers();
    } catch (err) {
      console.log('ERROR : ' + err);
    } finally {
      for (let worker of this.workers) {
        worker.form = new FormGroup({
          name: new FormControl({ value: worker.name, disabled: true }, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
          surname: new FormControl({ value: worker.surname, disabled: true }, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
          middlename: new FormControl({ value: worker.middlename, disabled: true }, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
          phone: new FormControl({ value: worker.phone, disabled: true }, [Validators.required,]),
          email: new FormControl({ value: worker.email, disabled: true }, [Validators.required,]),
          birth: new FormControl({ value: worker.birth, disabled: true }, [Validators.required,]),
          age: new FormControl({ value: worker.age, disabled: true }, [Validators.required,]),
          type: new FormControl({ value: worker.type, disabled: true }, [Validators.required,]),
        });
      }
    }
  }
}
