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
        <Button>
          <Link href="/about">About</Link>
        </Button>
        <Button>
          <Link href="/works">Works</Link>
        </Button>
        <Button>
          <Link href="/contact">Contact</Link>
        </Button>
      </ButtonGroup>
    </div>
    <div>
      <img src="/Front-end-logo.png" alt="mark" />
    </div>
  </div>
);

export default Index;
