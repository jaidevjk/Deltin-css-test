
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";

import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';
import "./style.css";


const useStyles = makeStyles(theme => ({
    card:{
        minHeight:"1rem",
        width:"100%",
        paddingTop:"5px",
        marginLeft: "2%",
        marginRight:"2%",
        marginTop:"1%",
        marginBottom:"1%",
        backgroundColor: "white",
        display:"flex",
        justifyContent:"space-around",
        
             
    },
    carousel:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        margin:"0.5%",
        padding:"1%",
        paddingleft: "10%",
        paddingBottom: "0px",
        paddingTop:"22px",
         alignContent:"center"
        
    },
    container:{
        paddingLeft:"1%",
        paddingRight:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"whiteSmoke"
    }
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
      
};



// 

        
const backgroundImage = [
  'https://media.istockphoto.com/photos/portrait-of-a-young-woman-outdoors-smiling-picture-id1135381120?k=20&m=1135381120&s=612x612&w=0&h=8utfDKWn-21DKO7bVKSANdfc2qqXZDVCtVFPlZf-yeE=',
  'https://media.istockphoto.com/photos/portrait-of-a-young-man-picture-id1318928248?b=1&k=20&m=1318928248&s=170667a&w=0&h=ivbqNy3kJPwlZoJ6BUa8fpAzaeSBS8Np3erT2ddm0QU=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_YPGzX3KWYlO9Ljd2UKoDs2BjhOoEj5DBQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_YPGzX3KWYlO9Ljd2UKoDs2BjhOoEj5DBQ&usqp=CAU'
]

const TestimonialCarousel = () => {

    const [data,setData] = useState([
    { name:'Neel Kumar',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_YPGzX3KWYlO9Ljd2UKoDs2BjhOoEj5DBQ&usqp=CAU'},
    { name:'Bob Proctor',img:'https://media.istockphoto.com/photos/portrait-of-a-young-man-picture-id1318928248?b=1&k=20&m=1318928248&s=170667a&w=0&h=ivbqNy3kJPwlZoJ6BUa8fpAzaeSBS8Np3erT2ddm0QU='},
    { name:'Prerna Tripathi',img:'https://media.istockphoto.com/photos/portrait-of-a-young-woman-outdoors-smiling-picture-id1135381120?k=20&m=1135381120&s=612x612&w=0&h=8utfDKWn-21DKO7bVKSANdfc2qqXZDVCtVFPlZf-yeE='},
    { name:'Prerna Tripathi',img:'https://media.istockphoto.com/photos/portrait-of-a-young-woman-outdoors-smiling-picture-id1135381120?k=20&m=1135381120&s=612x612&w=0&h=8utfDKWn-21DKO7bVKSANdfc2qqXZDVCtVFPlZf-yeE='
}]);
    const classes = useStyles();

    return (
    <div className={classes.container}>
    <Carousel
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    transitionDuration={200}
    containerClass="react-multi-carousel-list"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass={classes.carousel}
    /*itemClass= 'card1'*/
    showDots = {false}
    
    
    >
        {data.map((obj) => {
            return(
                <TestimonialCard
                className = {classes.card}
               
                name={obj.name}
                image={obj.img}
                content={"Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing!It's too good"}
                project={"Testimonial card"}
                />
            )
        })}
    
    </Carousel>
    </div>
    );
}
export default TestimonialCarousel;