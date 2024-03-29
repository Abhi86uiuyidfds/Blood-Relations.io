import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import  searchDocument  from "../document/document";
import Showdata from "./Showdata";

const Returndata = (props) => {
    const checkurl = () => {
    try {
      if (window.location.pathname.length > 0) {
        let s = window.location.pathname;
        if (s.match("%20")) {
          s = s.replaceAll(/%20/g, " ");
        } else {
        }
        if (s.match("/")) {
          s = s.split("/").filter((e) => {
            return e !== "";
          });
        }
        return s[0];
      }
    } catch {
      console.log("Internal error");
    }
  };

  const checkData = (s) => {
    try {
      let data = [];
      for (const element in searchDocument) {
        let r = { element, n: 0 };
        for (const key in s) {
          if (element.match(s[key])) {
            // console.log(element.match(s[key]));
            r["n"] = r["n"] + 1;
          }
        }

        // console.log(r);
        data = data.concat(r);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const senddata = (s) => {
    try {
      let news = s.split(" ");
      let d = checkData(news);
      let newdata = [];
      let c = 0;
      // console.log(a3(news));
      for (let index = news.length; index >= 0; index--) {
        //  console.log(index);
        //  console.log(news);
        for (const key in d) {
          // console.log(d[key]["n"]);
          if (index === d[key]["n"]) {
            // console.log(d[key],"s1");
            newdata = newdata.concat(d[key]);
            c += 1;
            if (c >= 5) {
              return newdata;
            }
          }
        }
      }
      console.log(c);
    } catch (e) {
      console.log(e);
    }
  };
// eslint-disable-next-line
  const [search, setSearch] = useState(checkurl());
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      if (search) {
        setData(senddata(search));
      } else {
      }
    } catch {
      console.log("internal server error");
    }
    // eslint-disable-next-line
  }, []);
  // console.log(data[0]["element"]);
  //   let s = search.replaceAll(/%20/g, " ").replaceAll(/([?]+[\w]+[=])/g, "");
   
  return (
    <>
      <div className="resultbody" id="resultbody">
        {data
          ? data.map((e) => {
              return  <Showdata  question={e["element"]} answer={searchDocument[e["element"]]} key={e["element"]}/> 
            })
          : "Not found"}
      </div>
    </>
  );
};
// Home.propTypes = {}

export default Returndata;
