
import { injectGlobal } from '@emotion/css';

injectGlobal`
body {
    font-family: Arial, Helvetica, sans-serif;
    color: #dddddd;
    background-color: #332222;
  }

  .App {
    text-align: center;
    font-size: large;
    background-color: aqua;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button,
  ul,
  ol,
  li {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: inherit;
  }
  img,
  a {
    display: block;
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
  .list {
    list-style: none;
  }
`;