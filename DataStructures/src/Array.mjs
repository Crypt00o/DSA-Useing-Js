class Array{
    
    #length=null
    #type=null
    #types=['string','boolean','number','bigint','object']
    #array=[]

    constructor(type,length){

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
            throw Error(`Error Index ${index} is Not Valid Array Index `)
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
            throw Error(`Error Index ${index} is Not Valid Array Index `)
        }   
    }


}
export {Array}
