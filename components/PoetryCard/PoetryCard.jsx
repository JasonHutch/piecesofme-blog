import styles from './PoetryCard.module.scss';
import Image from 'next/image'
const { motion, AnimateSharedLayout } = require("framer-motion");
import { useState } from 'react';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

function GraphCMSImageLoader({ src, width }) {
    const relativeSrc = (src) => src.split("/").pop();
  
    return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
  }  

const PoetryCard = ({long}) => {
    const [open, setOpen] = useState(false);
    
    return (
        <AnimateSharedLayout>
            {open?
                <motion.div onClick={()=>setOpen(false)}
                    layoutId="expandable-card"
                    className={styles.PoetryCard__expanded}
                >
                   <div style={{width: 400}}>
                   What is an echo, I ask myself as I sit alone. All I can think of is it being the reminisce of an original version of something. A trace amount of the original, scattered about, bouncing off empty space. I often think of me now as an echo of myself. My true self I'd say. I can't always hear my own echo. But when it quiets down, for just a second, if I really listen I can hear it. A low groaning noise you wouldn't even notice was there until it's gone. 
                   </div>
                </motion.div>
                :
                <motion.div
                    className={long ? styles.PoetryCardLong : styles.PoetryCard}
                    onClick={() => setOpen(true)}
                    layoutId="expandable-card"
                >
                    <motion.div
                    //whileHover={{ scale: 1.1 }}
                    //className={styles.PoetryCard__imgWrap}

                >
                    <Image
                        src={"https://picsum.photos/769/1024"}
                        alt="Picture of the author"
                        layout='fill'
                        className={styles.PoetryCard__img}
                    />
                </motion.div>
                    

                </motion.div>
                
            }
        </AnimateSharedLayout>
    );
}

export default PoetryCard;