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
            throw new Error(`Error : Length ${length} is Not Valid Array Length `)
        }
        if(this.#types.includes(type)){
            this.#type=type
            this.#setDefaultValues()
        }
        else{
            throw new Error(`Error : Type ${type} is Not Supported `)
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
        console.log(this.#array)
    }


    setValueof(index,value){
        if(typeof index==='number' && index<this.#length){
            if(typeof value===this.#type){
                this.#array[index]=value
            }
            else{
                throw new Error(`Error : ${typeof value} is the same Type of ${this.#type}`)
            }
        }
        else{
            throw new Error(`Error : Index ${index} is Not Valid Index For This Array `)
        }
    }


    getValueof(index){
        if(typeof index==='number' && index<this.#length){
            return this.#array[index]
        }
        else{
            throw new Error(`Error : Index ${index} is Not Valid Array Index `)
        }
    }

}
