Component({
 properties:{
   placeholder:{
     type:String,
     value:'请填写内容'
   },
   visable:{
     type:Boolean,
     value:true

   }
 },
 data:{
   value:""
 },
 methods:{
   confirm(){
     this.triggerEvent("confirm",122)
   },
   cancel(){
     this.triggerEvent("cancel", 122)
   },
   watchValue(e){
     console.log('e')
     console.log(e)
   }
 }
})