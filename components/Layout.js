import Link from 'next/link'
import Head from 'next/head'

import Header from './Header'

export default class Layout extends React.Component {

    componentDidMount() {

		const width = window.innerWidth;
    }

	render () {

		const { children, title, width, classHeader } = this.props
		
		return <div className="Layout" >

					<Head>
						<title>{ title }</title>

						<meta name="viewport" content="width=device-width, user-scalable=no" />
						<link rel="icon" type="image/png" href="/static/img/pd-small.svg" />

						<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
						<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

						<link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet" />

						<link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet" />


					</Head>


					
					{children}

					
					<style jsx global="true">{`

						body {
							overflow-x: hidden;
							color:  rgba(0, 0, 0, 0.2);
						}
						
						.Layout {
							height: 100vh;
							font-family: 'Carter One', cursive;
							font-size: 13px;
							font-weight: bold;
						}

						@font-face {
							font-family: 'Baloo';
							src: local('☺'), 
								url('/static/fonts/Baloo-Regular.ttf') format('truetype'), 
							font-weight: normal;
							font-style: normal;
						}


						@font-face {
							font-family: 'UniSans';
							src: url('/static/fonts/Uni-Sans.otf');
							font-weight: normal;
							font-style: normal;
						}
			
						.container {
							max-width: 1200px;
							width: 80%;
							margin: auto;
						}


						html, body, div, span, applet, object, iframe,
						h1, h2, h3, h4, h5, h6, p, blockquote, pre,
						a, abbr, acronym, address, big, cite, code,
						del, dfn, em, img, ins, kbd, q, s, samp,
						small, strike, strong, sub, sup, tt, var,
						b, u, i, center,
						dl, dt, dd, ol, ul, li,
						fieldset, form, label, legend,
						table, caption, tbody, tfoot, thead, tr, th, td,
						article, aside, canvas, details, embed,
						figure, figcaption, footer, header, hgroup,
						main, menu, nav, output, ruby, section, summary,
						time, mark, audio, video {
							margin: 0;
							padding: 0;
							border: 0;
							font-size: 100%;
							font: inherit;
							vertical-align: baseline;
						}
						article, aside, details, figcaption, figure,
						footer, header, hgroup, main, menu, nav, section {
							display: block;
						}
						body {
							line-height: 1;
						}
						ol, ul {
							list-style: none;
						}
						blockquote, q {
							quotes: none;
						}
						blockquote:before, blockquote:after,
						q:before, q:after {
							content: '';
							content: none;
						}
						table {
							border-collapse: collapse;
							border-spacing: 0;
						}
						a {
							text-decoration: none;
							display: inline-block;
							color: white;
						}
						input:focus {
							border: none;
							outline-color: white;
						}
						img {
							max-width: 100%;
							height: auto;
							display: block;
							margin: auto;
						}
						:focus {
							outline: inherit;
						}

						body {
							font-family: UniSans;
							color: white;
						}

					`}</style>

				</div>
	}
}