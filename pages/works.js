import "normalize.css/normalize.css";

import SampleWork from "../components/SampleWork";

import styles from "./works.module.scss";

const Works = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h1>SAMPLE WORKS</h1>
    </div>
    <div className={styles.sampleWorks}>
      <SampleWork
        image={"/vokalayemelk.png"}
        title={"وکلای ملک و املاک"}
        content1={"وبسایت گروه وکلای ملک کوشش"}
        content2={
          "این وبسایت در مدتی کوتاه توانست معرفی بسیار بهتری از این وکلای خبره به فضای مجازی انجام دهد"
        }
        link={"http://vokalayemelk.ir/"}
        lang={"fa"}
      />
      <SampleWork
        image={"/waterab.png"}
        title={"وبسایت معرفی محصولات شرکت نوپای واتراب"}
        content1={"وبسایت معرفی محصولات شرکت نوپای واتراب"}
        content2={
          "بسیاری از نیاز های مشتریان مربوط به همین صنعت از همین وبسایت برطرف شده"
        }
        link={"http://waterab.ir/"}
        lang={"fa"}
      />
      <SampleWork
        image={"/smartBrain.png"}
        title={"when using AI in Front-End"}
        content1={"API + React"}
        content2={"Simple web app using React plus clairfai API"}
        link={"https://mohammadjavadnouri.github.io/smart-brain/"}
        lang={"en"}
      />
      <SampleWork
        image={"/mjnouri.png"}
        title={"Mohammadjavad Nouri Portfolio"}
        content1={"My Portfolio"}
        content2={"Simple portfolio to introduce myself"}
        link={"http://mjnouri.ir/"}
        lang={"en"}
      />
    </div>
  </div>
);

export default Works;
