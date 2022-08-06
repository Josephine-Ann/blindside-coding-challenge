import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
const { Meta } = Card;
import Link from "next/link";
import styles from '../styles/VideoGrid.module.css';

const VideoGrid = ({video}) => {
 return (
  <Link href={`/video/${video.id}`}>
      <Card
      className={`flex flex-col items-center ant-card`}
    hoverable
    style={{
      width: 240,
      height: 221
    }}
    cover={
      <img
        alt="example"
        className={`${styles.widthPhoto}`}
        src={video ? video.image : "https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg"}
      />
    }
  >
    <Meta title={`Videos by ${video.user.name}`} description="Check it out!" />
  </Card>
  </Link>
 )
  };

export default VideoGrid;
