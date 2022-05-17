import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Header from './Header'

const Viewbooks = () => {
    var booklist=[
        {"Title":"wings of fire","Price":"300","Author":"APJ","image":"https://media.istockphoto.com/photos/stack-of-books-picture-id157482029?k=20&m=157482029&s=612x612&w=0&h=b_0K-1Ut9alhKYu9zlgevSAHDkqSxLF634VDwPw8CHU="},
        {"Title":"XYZ","Price":"100","Author":"ABC","image":"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"},
        {"Title":"ABC","Price":"200","Author":"XYZ","image":"https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y="}
    ]
  return (
    <div>
        <Header/>
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {booklist.map((value,key)=>{return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.Title}</h5>
    <p class="card-text">{value.Price}</p>
    <p class="card-text">{value.Author}</p>
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
            </div>})}
                
            </div>
            
        </div>
    </div>
</div>
        </div>
  )
}

export default Viewbooks