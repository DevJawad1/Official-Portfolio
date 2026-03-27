import { motion } from "framer-motion"

const stairAnimation = {
    initial:{
        top: "0%"
    },
    animate: {
        top:"100%",

    },
    exit:{
        top: ["100%", "0%"]
    }
}


//  calculate  the reverse index for staggered 
const reverseIndex = (index)=>{
    const totalSteps= 6
    return totalSteps-index-1 
}
const Stairs = () => {

  return (
    <>
        {/* render a motion div each representing a staep of stairs
        
        each div will have the same animation defned by the stairsAnimation object
        The below for each div is calculated dynamically base on its reverse index 
        creating a starggerd effect with generating delay for each subsequent step

        */}

        {[...Array(6)].map((_, index)=>{
            return(
            <motion.div  
            key={index} 
            variants={stairAnimation} 
            initial="initial" 
            animate="animate"  
            exit="exit" 
            transition={{
                duration:0.4,
                ease:"easeInOut",
                delay: reverseIndex(index)*0.1
            }}
            className="h-full w-full bg-white relative"
            />
        )
        })}  
    </>
  )
}

export default Stairs