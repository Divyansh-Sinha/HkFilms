import React from 'react';
import BuyNowForm from '../components/DialogForm/BuyNowForm';
import CustomizedDialogs from '../components/DialogForm/DialogForm';

import './CourseDesign.css'


import './Courses.css'
const CourseDesine = ({id,url,name,price , tag , tag1,date}) => {

    const buyNow  = () => {
        
        console.log(name)
        console.log(price)
        
        
    }

	//console.log(tag  + '&' + tag1)
    return (
       
            
        <>
		
	
		{(tag == tag1) ?
		(

			<div className="col" >
				<div className="cardContainer">
					<div className="front" style={{ backgroundImage: 'url(' + url + ')' }}>
						<div className="inner">
							<p className="ttc light-green">{name}</p>
              
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>{date}</p>
						  <span>{price}</span>
						  {/* <button onClick = {()=> {buyNow()}}>Buy Now</button> */}
						  <CustomizedDialogs>
							  <BuyNowForm name= {name}  price = {price}> </BuyNowForm>
						  </CustomizedDialogs>
						</div>

					</div>
				</div>
			</div>
		)


		:(
				<>
				</>
		)


		}

		
       


			</>
			


        
    );
}

export default CourseDesine;
