<template>
	<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
</head>
<body style="font-family: Arial, Helvetica, sans-serif; box-sizing: border-box; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;"> -->
	<table
		class="wrapper"
		width="100%"
		cellpadding="0"
		cellspacing="0"
		role="presentation"
		style="
			font-family: Arial, Helvetica, sans-serif;
			box-sizing: border-box;
			background-color: #ffffff;
			margin: 0;
			padding: 0;
			width: 100%;
			-premailer-cellpadding: 0;
			-premailer-cellspacing: 0;
			-premailer-width: 100%;
		"
	>
		<tr>
			<td
				align="center"
				style="
					font-family: Arial, Helvetica, sans-serif;
					box-sizing: border-box;
				"
			>
				<table
					class="content"
					width="100%"
					cellpadding="0"
					cellspacing="0"
					role="presentation"
					style="
						font-family: Arial, Helvetica, sans-serif;
						box-sizing: border-box;
						margin: 0;
						padding: 0;
						width: 100%;
						-premailer-cellpadding: 0;
						-premailer-cellspacing: 0;
						-premailer-width: 100%;
					"
				>
					<tr>
						<td
							class="header"
							style="
								font-family: Arial, Helvetica, sans-serif;
								box-sizing: border-box;
								padding: 25px 35px 0 35px;
							"
						>
							<a href="/dashboard?tab=4">
								<svg
									width="38"
									height="18"
									viewBox="0 0 38 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_2987_35638)">
										<path
											d="M17.2765 15.3948V8.64142C17.2746 7.46001 17.0309 6.29152 16.5603 5.20794C16.0897 4.12437 15.4023 3.14869 14.5404 2.34103C13.6785 1.53338 12.6603 0.910863 11.5488 0.511859C10.4372 0.112855 9.25567 -0.0541868 8.07709 0.0210346C3.50365 0.311184 -5.04797e-08 4.2261 -5.04797e-08 8.79911V16.0949C-0.000276371 16.2514 0.0302894 16.4063 0.0899486 16.551C0.149608 16.6956 0.23719 16.827 0.347682 16.9377C0.458174 17.0485 0.589408 17.1363 0.733874 17.1963C0.87834 17.2562 1.0332 17.287 1.1896 17.287H4.1699C4.48596 17.287 4.78908 17.1614 5.01256 16.9379C5.23605 16.7143 5.36161 16.4111 5.36161 16.0949V15.4915V8.64142C5.36207 8.17904 5.46027 7.72198 5.64974 7.30022C5.83922 6.87847 6.11569 6.50155 6.46102 6.19421C6.80636 5.88687 7.21275 5.65605 7.65354 5.51688C8.09433 5.37771 8.55955 5.33335 9.01868 5.3867C9.82661 5.49403 10.5673 5.89356 11.1009 6.50985C11.6345 7.12615 11.9241 7.91656 11.9149 8.73184V15.79V16.0928C11.9149 16.409 12.0405 16.7122 12.264 16.9358C12.4874 17.1593 12.7906 17.2849 13.1066 17.2849H16.0848C16.4009 17.2849 16.704 17.1593 16.9275 16.9358C17.151 16.7122 17.2765 16.409 17.2765 16.0928V15.4894C17.2765 15.4578 17.2765 15.4263 17.2765 15.3948Z"
											fill="#1C1836"
										/>
									</g>
									<g clip-path="url(#clip1_2987_35638)">
										<path
											d="M37.2411 15.3948V8.64142C37.2392 7.46001 36.9955 6.29152 36.5249 5.20794C36.0543 4.12437 35.3669 3.14869 34.505 2.34103C33.6431 1.53338 32.625 0.910863 31.5134 0.511859C30.4018 0.112855 29.2203 -0.0541868 28.0417 0.0210346C23.4683 0.311184 19.9646 4.2261 19.9646 8.79911V16.0949C19.9643 16.2514 19.9949 16.4063 20.0546 16.551C20.1142 16.6956 20.2018 16.827 20.3123 16.9377C20.4228 17.0485 20.554 17.1363 20.6985 17.1963C20.843 17.2562 20.9978 17.287 21.1542 17.287H24.1345C24.4506 17.287 24.7537 17.1614 24.9772 16.9379C25.2007 16.7143 25.3262 16.4111 25.3262 16.0949V15.4915V8.64142C25.3267 8.17904 25.4249 7.72198 25.6144 7.30022C25.8038 6.87847 26.0803 6.50155 26.4256 6.19421C26.771 5.88687 27.1774 5.65605 27.6182 5.51688C28.0589 5.37771 28.5242 5.33335 28.9833 5.3867C29.7912 5.49403 30.5319 5.89356 31.0655 6.50985C31.5991 7.12615 31.8887 7.91656 31.8795 8.73184V15.79V16.0928C31.8795 16.409 32.0051 16.7122 32.2286 16.9358C32.4521 17.1593 32.7552 17.2849 33.0712 17.2849H36.0494C36.3655 17.2849 36.6686 17.1593 36.8921 16.9358C37.1156 16.7122 37.2411 16.409 37.2411 16.0928V15.4894C37.2411 15.4578 37.2411 15.4263 37.2411 15.3948Z"
											fill="#1C1836"
										/>
									</g>
									<defs>
										<clipPath id="clip0_2987_35638">
											<rect
												width="17.2828"
												height="17.2828"
												fill="white"
											/>
										</clipPath>
										<clipPath id="clip1_2987_35638">
											<rect
												width="17.2828"
												height="17.2828"
												fill="white"
												transform="translate(19.9646)"
											/>
										</clipPath>
									</defs>
								</svg>
							</a>
						</td>
					</tr>
					<!-- Email Body -->
					<tr>
						<td
							class="body"
							width="100%"
							cellpadding="0"
							cellspacing="0"
							style="
								font-family: Arial, Helvetica, sans-serif;
								box-sizing: border-box;
								background-color: #ffffff;
								margin: 0;
								padding: 0;
								width: 100%;
								-premailer-cellpadding: 0;
								-premailer-cellspacing: 0;
								-premailer-width: 100%;
							"
						>
							<table
								class="inner-body"
								align="left"
								width="100%"
								cellpadding="0"
								cellspacing="0"
								role="presentation"
								style="
									font-family: Arial, Helvetica, sans-serif;
									box-sizing: border-box;
									background-color: #ffffff;
									margin: 0 auto;
									padding: 0;
									-premailer-cellpadding: 0;
									-premailer-cellspacing: 0;
									-premailer-width: 570px;
								"
							>
								<!-- Body content -->
								<tr>
									<td
										class="content-cell"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											box-sizing: border-box;
											padding: 35px;
										"
									>
										<h4
											style="
												font-family: Arial, Helvetica,
													sans-serif;
												box-sizing: border-box;
												color: #1c1836;
												font-size: 24px;
												font-weight: 600;
												margin-bottom: 0.5em;
												margin-top: 0;
												text-align: left;
											"
										>
											Payment Received!
										</h4>
										<p
											style="
												font-family: Arial, Helvetica,
													sans-serif;
												box-sizing: border-box;
												color: #200d5d;
												font-size: 16px;
												line-height: 1.5em;
												margin-top: 0;
												text-align: left;
											"
										>
											You have received payment for your
											work. Click the “Check my balance”
											button below to view payment
											details.
										</p>
										<table
											class="action"
											align="center"
											width="100%"
											cellpadding="0"
											cellspacing="0"
											role="presentation"
											style="
												font-family: Arial, Helvetica,
													sans-serif;
												box-sizing: border-box;
												margin: 70px 0;
												padding: 0;
												text-align: center;
												width: 100%;
												-premailer-cellpadding: 0;
												-premailer-cellspacing: 0;
												-premailer-width: 100%;
											"
										>
											<tr>
												<td
													style="
														font-family: Arial,
															Helvetica,
															sans-serif;
														box-sizing: border-box;
														background-color: #ecebff;
														height: 297px;
														position: relative;
														overflow: hidden;
													"
												>
													<img
														src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
														width="100%"
														height="auto"
													/>
													<div
														style="
															position: absolute;
															width: 100%;
															bottom: 20%;
														"
													>
														<a
															href="#"
															target="_blank"
															rel="noopener"
															style="
																font-family: Arial,
																	Helvetica,
																	sans-serif;
																box-sizing: border-box;
																line-height: 1;
																font-weight: 700;
																font-size: 18px;
																padding-top: 1rem;
																padding-bottom: 1rem;
																background-color: #5427e2;
																border-radius: 9999px;
																justify-content: center;
																color: #ffffff;
																text-decoration: none;
																display: block;
																margin-left: 10%;
																margin-right: 10%;
															"
															>Check your balance
															></a
														>
													</div>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td
										class="content-cell"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											box-sizing: border-box;
											padding-left: 35px;
											padding-bottom: 100px;
										"
									>
										<p
											style="
												color: #1c1836;
												font-weight: 600;
												font-size: 18px;
												line-height: 1.5em;
												margin: 0 0;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											Team Nanny Nina
										</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td
							style="
								font-family: Arial, Helvetica, sans-serif;
								box-sizing: border-box;
							"
						>
							<table
								class="footer"
								align="center"
								width="100%"
								cellpadding="0"
								cellspacing="0"
								role="presentation"
								style="
									background-color: #5427e2;
									font-family: Arial, Helvetica, sans-serif;
									box-sizing: border-box;
									margin: 0 auto;
									padding: 0;
									text-align: left;
									-premailer-cellpadding: 0;
									-premailer-cellspacing: 0;
									-premailer-width: 570px;
								"
							>
								<tr>
									<td
										class="content-cell"
										align="left"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											box-sizing: border-box;
											padding: 30px;
										"
									>
										<p
											style="
												line-height: 0.5em;
												margin-top: 0;
												color: #ffffff;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											Have questions or need help?
										</p>
										<p
											style="
												line-height: 1.5em;
												margin-top: 0;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											<a
												href="maito:info@nannynina.nl"
												target="_blank"
												style="
													color: #adffd6;
													text-decoration: none;
												"
												>info@nannynina.nl</a
											>
										</p>
										<table
											role="presentation"
											style="margin: 20px 0"
										>
											<tr>
												<td style="padding: 0">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="
																display: block;
																border: 0;
															"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="
																display: block;
																border: 0;
															"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="
																display: block;
																border: 0;
															"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="
																display: block;
																border: 0;
															"
													/></a>
												</td>
											</tr>
										</table>
										<p
											style="
												line-height: 1.2em;
												margin-top: 0;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											<a
												href="#"
												target="_blank"
												style="
													color: #adffd6;
													text-decoration: none;
												"
												>FAQ</a
											>
										</p>
										<p
											style="
												line-height: 1.2em;
												margin-top: 0;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											<a
												href="#"
												target="_blank"
												style="
													color: #adffd6;
													text-decoration: none;
												"
												>Unsubscribe</a
											>
										</p>
										<p
											style="
												line-height: 1.2em;
												margin-bottom: 0;
												margin-top: 0;
												color: #ffffff;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											<a
												href="#"
												target="_blank"
												style="
													color: #adffd6;
													text-decoration: none;
												"
												>Terms of Service</a
											>
											and
											<a
												href="#"
												target="_blank"
												style="
													color: #adffd6;
													text-decoration: none;
												"
												>Privacy Policy</a
											>
										</p>
									</td>
								</tr>
								<tr>
									<td
										class="content-cell"
										align="left"
										style="
											font-family: Arial, Helvetica,
												sans-serif;
											box-sizing: border-box;
											padding: 100px 0 20px 30px;
										"
									>
										<p
											style="
												line-height: 1.2em;
												margin-top: 0;
												color: #ffffff;
												font-size: 12px;
												text-align: left;
												-webkit-font-smoothing: antialiased;
												-moz-osx-font-smoothing: grayscale;
											"
										>
											Nanny Nina 2022
										</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!--</body>
 </html> -->
</template>
