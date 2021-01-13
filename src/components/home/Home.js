import React from 'react';
import "./home.css";
import Product from "../product/Product";

function Home() {
    return (
        <div className="home">
          <img src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt="banner"
          className="home__img"/>
          <div className="home__row">
            <Product id="11420633" 
            title="Speaker with lights, automatic noise cancellation" 
            price={12.8} 
            rating={4} 
            image="https://images.unsplash.com/photo-1545454675-3531b543be5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
              </div>
              <div className="home__row">
            <Product id="12458523" 
            title="I phone 23s plus" 
            price={333} 
            rating={5} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgErj2GEr17XNrftEaLrt75Jana2693akcXA&usqp=CAU" />
              </div>
              <div className="home__row">
            <Product id="15448784" 
            title="Samsung smart refrigerator" 
            price={12000} 
            rating={5} 
            image="data:image/jpeg;base64,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"/>
              </div>
              <div className="home__row">
            <Product id="52885554" 
            title="Fell the sound: BEATs" 
            price={350} 
            rating={4} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S2OXqZniPGueYOC9bEyoi_0FkC-3Tds-8g&usqp=CAU"/>
              </div>
              <div className="home__row">
            <Product id="22465633" 
            title="apple broadband" 
            price={530} 
            rating={4} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi1iMTGb9n5QsqG_w6h-PvmH4n273CXKiYQ&usqp=CAU"/>
              </div>
        </div>
    )
}

export default Home;
