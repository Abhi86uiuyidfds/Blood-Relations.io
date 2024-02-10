import React from "react";
import searchDocument from "../document/document";
import Showdata from "./Showdata";
// import PropTypes from 'prop-types'

const Home = (props) => {
  // console.log(searchDocument);
  const shower=()=>{
    let data =[]
     for (const key in searchDocument) {
      data.push(key)
    }
    console.log(data);

    return data.map((e)=>{
      return <Showdata  question={e} answer={searchDocument[e]} key={e}/>
    })
  }
  
  return (
    <>
      <div className="resultbody" id="resultbody">
        {searchDocument
          ? shower()
          : "Not found"}
      </div>
    </>
  );
};

// Home.propTypes = {}

export default Home;
