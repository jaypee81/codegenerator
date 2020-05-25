import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  tablerecords = {};

  tablename : string; 

  dataloaded : boolean;

  showControls : boolean;

  noderef : any;

  fields : Array<string> = [];

  constructor(public restAPI : RestAPIService) { }

  onChangeTablename()
  {
    this.noderef.tablename = this.tablename;
    this.dataloaded = false;
    var data = {
      tablename : "DD03L",
      fields : ["CHECKTABLE","KEYFLAG","FIELDNAME","ROLLNAME","TABNAME"],
      options : ["TABNAME = '"+ this.tablename +"'"]
    };
    this.restAPI.readTable(data).subscribe(data=>{
                                                    this.dataloaded = true;
                                                    this.tablerecords=data;
                                                    
                                                  },
                                            error=>{console.log(error)}
                                            );

  }

  onFieldSelect(record)
  {
      this.showControls = true;
      console.log(record.FIELDNAME);
      this.fields.push(record.FIELDNAME);
    }

  ngOnInit(): void {
    this.dataloaded = true;
    this.showControls = false;
    if(this.noderef.tablename != "Table")
    {
      this.tablename = this.noderef.tablename;
    }
  }

  hideControls() {
    this.showControls = false;
  }
  closeProperties(){
    console.log("Closing");
  }

  addFields()
  {
    console.log(this.fields);
    this.noderef.fields=this.fields;
    this.showControls=false;
  }
}
