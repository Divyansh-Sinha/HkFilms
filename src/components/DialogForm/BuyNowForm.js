import React from 'react'

 

function BuyNowForm({name , price}) {
   



    
  
    
    return (
        <div className="">
            <article className="mw6 center br3 pa3 pa4-ns w-100 mv3 shadow-1"  >
                <main class="pa4 black-80">
                    <form class="measure center w-100" >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 w-100">
                            <legend className="f4 fw6 ph0 mh0">Pay On 7757829673(G-PAY)</legend>
                           

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="product-name">Product name</label>
                                {
                                    
                                   
                                            <input className="pa2 input-reset ba bg-transparent w-100" readonly="readonly"   value = {name}  name="product-name" id="product-name" />
                                        
                                
                                }
                               
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="total">Amount</label>
                                <input className="pa2 input-reset ba bg-transparent w-100" readonly="readonly"  value = {price}  name="total" id="total" />
                            </div>
                          
                          
                            
                        </fieldset>
                      

                    </form>
                </main>
            </article>
            
        </div>
    )
}

export default BuyNowForm
