import React from 'react';
import styles from './TextDecoration.module.css';
import ReactMarkdown from 'react-markdown';

/**
 * Highlight component use for hightligting text's background 
 * ```html
 * <Hl color="#25c2a0" textColor="#fff" >Docusaurus green</Hl>
 * ```
 * @param children display text
 * @param color text highlight color
 * @param textColor display text's color
 * @returns styled text by color and textColor
 */
 const Hl = ({children, color, textColor, ...props}) => {
    return <span
      style={{
        backgroundColor: color? color : null,
        borderRadius: '2px',
        color: textColor? textColor : '#fff',
        padding: '0.2rem',
        ...props.style,
      }}>
      {children}
    </span>
  }

  /**make a paragraph with Tab at the first line. helps improve readability of the docs
   * ```mdx
   * <Tab>Lorem ipsum dolor sit amet, consectetur adipiscing [elit](https://www.uwu.com), sed do eiusmod tempor incididunt ut labore et dolore magna.</Tab>
   * ```
   * @param children element children (can pbe put as markdown sentence)
   * @returns "\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;\&nbsp;" + children
   */
  const Tab = ({children}) => {
    const  haveChildren = (children === undefined)? false : true;
    return haveChildren? <ReactMarkdown>{"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + children}</ReactMarkdown> :
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
  }

  export default { Hl, Tab }