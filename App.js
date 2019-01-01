import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { resolve, reject } from 'q';
import Demo, { f1} from './Demo';




let Number=[1,2,3,4,5,2,3,2,3,2];
let color=['pink','red','bule','black'];
let align={ align : 'left'};
class App extends Component {
      
  render() { 
      //ES6
        console.log("Import:"+ f1);
            let obj={
        a(b,c){ console.log("obj Call:"+b)}
      }
      obj.a(10,5);


      let oddno={p:1,q:3,r:5};
      let {p,q,r} = oddno;
      console.log("Object Matching:"+oddno.q);

      let func=(a,b=5) =>{ return a+b; }
      console.log(`Function:${func(20)}`);
      console.log(`Function:${func(10,5)}`);
 
        let x=5;
        console.log("x:"+x);
          let ES6={
            a(x){ console.log("es6A:"+x);},
            b(x){console.log("es6B:"+x);}
            
          }
            let kh=`Concation:${x}`;      
          ES6.a(10);
          ES6.b(25);
        let fun =(x) => x;
           console.log("ES6:"+x);


           for(let i of color)
           {
             console.log(`Colors:${i}`);
           }

           let datafun= (a,b) =>{
             return a+b;
             
           }
           console.log("sum:"+ datafun(10,5));

           let arr1=[1,2,3];
           let arr2=['a','b','c'];
           let arr3=[...arr1,...arr2];
           console.log("Array:"+[...arr1,...arr2]);


           let arr4=[1,2,3];

           let fun1=(a,b,c) => a+b+c;
           console.log(fun1( ...arr4));


           class fun2{
             constructor(a,b)
             {
               this.a=a;
               this.b=b;
             }
             getsum(){
               return this.a / this.b;
             }
           }
           let y=new fun2(10,2);

           console.log("Class Devide:"+ y.getsum());
          
           //Inheritance
           class Inheritance extends fun2
           {
             constructor(a,b,c)
             {
               super(a,b);
               this.c=c;
             }
             getproduct()
             {
               return this.a *this.b*this.c;
             }
           }
           let z=new Inheritance(3,4,5);

           console.log("Inhertance:"+z.getproduct());

           let str=`this
                      is
                      mango`;

            //Promise
      let dosecond = () => {
          console.log('Do Second');

      }

      let dofirst = new  Promise((resolve ,reject) => {
        setTimeout(() => {
          if(Number.length >10)
          {
            resolve(true);
            console.log("Do First");
          }else
          {
            reject(false);
            console.log("Error")
          }
        },500);
      }).catch(err => console.log("The Out Of length")).then( data => console.log("Data"))
      //dofirst.then(dosecond);

      //End

           //Array Method
         let car=['hundai','honda','BMW'];
         //Includes 
         let include=car.includes("BMW");
         console.log("include:"+include);

         //every
         let evey=Number.every(Number=> Number < 10);
        console.log("Eve:"+evey);
         
         //sort String
         let sortdata=color.sort();
        console.log("sorted array data:"+sortdata);
 
         //indexof
         let dataindxeof=car.indexOf("BMW");
        console.log("indexof:"+dataindxeof);

        //  shift  
          let shiftdata=car.shift();
         console.log("shift:"+shiftdata);

          //splice
          let splicedata= car.splice(1,0,"Ford");
         console.log("Splice:"+splicedata);
          
          color.forEach(index => { 
            console.log(`Color:${index}`);
            
          });
         
          
          //end      

    return (
      <div className="App">
        <header className="App-header">
        
          <h3>Number:{Number.toString()}</h3>
              <h3>Color :{color.toString()}</h3>
          <h3>Concate:{Number.concat(color).toString()}</h3>
          <h3>map:{Number.map((Number) =>  Number *2)}</h3>
          <h3>Find:{color.find((color) => color==="pink")}</h3>
          <h3>join:{color.join(" ,")}</h3>
          <h3>FindIndex:{color.findIndex((color) => color ==="Blue")}</h3>
          <h3>Filter:{Number.filter((Number) => Number === 2 )}</h3>
          {/* <h3>Pop:{color.pop()}</h3>
          <h3>push:{color.push("Yellow")}</h3> */}
          <h3>slice:{color.slice(1,4)}</h3>
          {/* <h3>Reverse:{color.reverse()}</h3> */}
          <h3>Sort:{Number.sort((a,b) => a-b)}</h3>
          <h3>String Sort:{sortdata}</h3>
          <h3>Fill:{car.fill("Kiwi")}</h3>
          <h3>reduce:{Number.reduce((a,b) => a+b)}</h3>
          <h3>Entry:{Number.entries().next().value}</h3>
          <h3>{kh}</h3>
          <h3>{str}</h3>
          <Demo />
          
        </header>
        
      </div>
    );
  }
}
export default App;