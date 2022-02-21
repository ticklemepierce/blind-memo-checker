// declare module '*.module.scss' {
//   const value: Record<string, string>;
//   export default value;
// }

// for regular imports
// e.g import * as styles from "./main.scss"
declare module '*.scss' {
	const styles: any;
	export = styles;
}