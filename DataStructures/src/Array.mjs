"use strict";

class Array{
    
    #length=null
    #type=null
    #types=['string','boolean','number','bigint','object']
    #array=[]

    constructor(type,length,array){

        if(typeof length==='number' && !isNaN(length) && length>=0 ){
            this.#length=length
        }
        else{
            throw  Error(`Length ${length} is Not Valid Array Length `)
        }
        if(this.#types.includes(type)){
            this.#type=type
            this.#setDefaultValues()
        }
        else{
            throw Error(`Type ${type} is Not Supported `)
        }
    
        if(array){
            if(typeof array==='object' && array.hasOwnProperty('length')){
                if(array.length<=this.#length){
                    for(let i =0 ; i<array.length;i++){
                        if(typeof array[i]===this.#type ){
                            this.#array[i]=array[i]
                            continue
                        }
                        else{
                            throw Error(`Type ${typeof array[i]} is not the same Type ${this.#type}`)
                        }
                    }
                    
                }
                else{
                    throw Error(`Array is Out Of Memory, [Overflow]`)
                }
            }
            else{
                throw Error('Can,t Assign Array')
            }
        }
    }



    #defaultValue(){

        switch  (this.#type){
            case this.#types[0]:
                return null;
            case this.#types[1]:
                return false;
            case this.#types[2]:
                return 0;
            case this.#types[3]:
                return 0;
            case this.#types[4]:
                return null;

        }
    }



    #setDefaultValues(){
        
        for (let i=0;i<this.#length;i++){
            this.#array[i]=this.#defaultValue()
        }
        
    }


    setValueof(index,value){
        if(typeof index==='number' && index<this.#length){
            if(typeof value===this.#type){
                this.#array[index]=value
            }
            else{
                throw Error(`${typeof value} is Not the same Type of ${this.#type}`)
            }
        }
        else{
            throw Error(`Index ${index} is Not Valid Index For This Array `)
        }
    }


    getValueof(index){
        if(typeof index==='number' && index<this.#length){
            return this.#array[index]
        }
        else{
            throw Error(`Index ${index} is Not Valid Index For This Array `)
        }
    }

    getSize(){
        return this.#length
    }

    getArray(){
        return this.#array
    }

    getIndexof(value){
        if(typeof value===this.#type){
            for(let i =0 ; i< this.#length ;i++){
                if(this.#array[i]===value){
                    return i
                }
                if(i==this.#length-1 && this.#array[i]!==value){
                    return -1
                }
                
            }
            
        }
        else{
            throw Error(`${typeof value} is Not the same Type of ${this.#type}`)
        }
    }


    removeValueof(index){
        if(typeof index==='number' && index<this.#length){
            for(let i=index;i<this.#length;i++){
                if(i+1===this.#length){
                this.#array[i]=this.#defaultValue()
                }else{
                    this.#array[i]=this.#array[i+1]
                }
            }
        }
        else{
            throw Error(`Index ${index} is Not Valid Index For This Array `)
        }   
    }


    insertValueof(index,value){
        if(typeof index==='number' && index<this.#length){
            if(typeof value===this.#type){
             for(let i=this.#length-1;i>index;i--){
             this.#array[i]= this.#array[i-1]
            }
            this.#array[index]=value
        }
            else{
                throw Error(`${typeof value} is Not the same Type of ${this.#type}`)
            }
        }
        else{
            throw Error(`Index ${index} is Not Valid Index For This Array `)
        }
    }



    reverse(){
        for(let i=0,j=this.#length-1;i<=this.#length/2;j--,i++){
            let temperory=this.#array[i]
            this.#array[i]=this.#array[j]
            this.#array[j]=temperory
        }
    }
}


export {Array}