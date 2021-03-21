import Link from "next/link";
import { Button, ButtonGroup } from "@material-ui/core";

import styles from "./index.module.scss";
import "normalize.css/normalize.css";

const Index = () => (
  <div className={styles.container}>
    <div>
      <h1>MOHAMADJAVAD NOURI</h1>
      <p>May be a Web Developer</p>
    </div>
    <div>
      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button>About</Button>
        <Button>Works</Button>
        <Button>Services</Button>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </ButtonGroup>
    </div>
    <div>
      <img src="/Front-end-logo.png" alt="mark" />
    </div>
  </div>
);

export default Index;
