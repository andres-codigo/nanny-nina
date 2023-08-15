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
											<rect width="17.2828" height="17.2828" fill="white" />
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
											font-family: Arial, Helvetica, sans-serif;
											box-sizing: border-box;
											padding: 35px 35px 0 35px;
										"
									>
										<h4
											style="
												font-family: Arial, Helvetica, sans-serif;
												box-sizing: border-box;
												color: #1c1836;
												font-size: 24px;
												font-weight: 600;
												margin-bottom: 0.5em;
												margin-top: 0;
												text-align: left;
											"
										>
											We've found nannies!
										</h4>
										<p
											style="
												font-family: Arial, Helvetica, sans-serif;
												box-sizing: border-box;
												color: #200d5d;
												font-size: 16px;
												line-height: 1.5em;
												margin-top: 0;
												margin-bottom: 0;
												text-align: left;
											"
										>
											Hi Janne, We have found some top profiles that match your
											request. Take a look before they're booked.
										</p>
										<table
											class="action"
											align="left"
											width="100%"
											cellpadding="0"
											cellspacing="0"
											role="presentation"
											style="
												font-family: Arial, Helvetica, sans-serif;
												box-sizing: border-box;
												margin: 35px 0 0 0;
												padding: 0;
												text-align: left;
												width: 100%;
												-premailer-cellpadding: 0;
												-premailer-cellspacing: 0;
												-premailer-width: 100%;
											"
										>
											<tr>
												<td
													style="
														font-family: Arial, Helvetica, sans-serif;
														box-sizing: border-box;
														height: 229px;
														position: relative;
														overflow: hidden;
														border-radius: 1.5rem;
													"
												>
													<div
														style="
															border: 1px solid #8f90a6;
															display: inline-flex;
															margin-bottom: 1rem;
															border-radius: 1.5rem;
														"
													>
														<a
															href="/"
															target="_self"
															style="
																width: 100%;
																height: 30rem;
																text-decoration: none;
															"
														>
															<div style="display: flex; flex-direction: row">
																<div
																	style="
																		position: relative;
																		flex-grow: 0;
																		height: 16rem;
																		overflow: hidden;
																	"
																>
																	<span
																		style="
																			position: absolute;
																			right: 0;
																			top: 1.75rem;
																			width: 2.75rem;
																		"
																	>
																		<svg
																			width="36"
																			height="36"
																			viewBox="0 0 36 36"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18 32.025L15.825 30.045C8.1 23.04 3 18.42 3 12.75C3 8.13 6.63 4.5 11.25 4.5C13.86 4.5 16.365 5.715 18 7.635C19.635 5.715 22.14 4.5 24.75 4.5C29.37 4.5 33 8.13 33 12.75C33 18.42 27.9 23.04 20.175 30.06L18 32.025Z"
																				fill="#D80027"
																			/>
																		</svg>
																	</span>
																	<img
																		src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea"
																		style="border-radius: 1.5rem; width: 100%"
																		width="100%"
																	/>
																</div>
															</div>
															<div
																style="
																	height: 14rem;
																	margin-left: 1rem;
																	margin-right: 1rem;
																"
															>
																<div
																	style="
																		margin-top: 0.5rem;
																		margin-bottom: 1.5rem;
																	"
																>
																	<div>
																		<h4
																			style="
																				font-size: 1.5rem;
																				color: #10062f;
																				line-height: 1.4rem;
																				font-weight: 600;
																				-webkit-font-smoothing: antialiased;
																				margin-bottom: 0.5rem;
																			"
																		>
																			Meike<span
																				style="
																					font-weight: 600;
																					font-size: 16px;
																					margin-left: 0.5rem;
																				"
																				>21yrs</span
																			>
																		</h4>
																		<p
																			style="
																				font-size: 0.875rem;
																				color: #8f90a6;
																				font-weight: 100;
																				line-height: 1;
																			"
																		>
																			Has 1year experience
																		</p>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 1rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M10 1.66666C5.40002 1.66666 1.66669 5.4 1.66669 10C1.66669 14.6 5.40002 18.3333 10 18.3333C14.6 18.3333 18.3334 14.6 18.3334 10C18.3334 5.4 14.6 1.66666 10 1.66666ZM7.74169 13.575L4.75002 10.5833C4.42502 10.2583 4.42502 9.73333 4.75002 9.40833C5.07502 9.08333 5.60002 9.08333 5.92502 9.40833L8.33335 11.8083L14.0667 6.075C14.3917 5.75 14.9167 5.75 15.2417 6.075C15.5667 6.4 15.5667 6.925 15.2417 7.25L8.91669 13.575C8.60002 13.9 8.06669 13.9 7.74169 13.575Z"
																				fill="#16A34A"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																			margin-left: 0.25rem;
																		"
																	>
																		Mon, Tue, Wed & Fri
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M11.6667 0.833313H8.33336C7.87502 0.833313 7.50002 1.20831 7.50002 1.66665C7.50002 2.12498 7.87502 2.49998 8.33336 2.49998H11.6667C12.125 2.49998 12.5 2.12498 12.5 1.66665C12.5 1.20831 12.125 0.833313 11.6667 0.833313ZM10 11.6666C10.4584 11.6666 10.8334 11.2916 10.8334 10.8333V7.49998C10.8334 7.04165 10.4584 6.66665 10 6.66665C9.54169 6.66665 9.16669 7.04165 9.16669 7.49998V10.8333C9.16669 11.2916 9.54169 11.6666 10 11.6666ZM15.8584 6.15831L16.4834 5.53331C16.8 5.21665 16.8084 4.69165 16.4834 4.36665L16.475 4.35831C16.15 4.03331 15.6334 4.04165 15.3084 4.35831L14.6834 4.98331C13.3917 3.94998 11.7667 3.33331 10 3.33331C6.00002 3.33331 2.60002 6.63331 2.50002 10.6333C2.39169 14.8666 5.78336 18.3333 10 18.3333C14.15 18.3333 17.5 14.975 17.5 10.8333C17.5 9.06665 16.8834 7.44165 15.8584 6.15831ZM10 16.6666C6.77502 16.6666 4.16669 14.0583 4.16669 10.8333C4.16669 7.60831 6.77502 4.99998 10 4.99998C13.225 4.99998 15.8334 7.60831 15.8334 10.8333C15.8334 14.0583 13.225 16.6666 10 16.6666Z"
																				fill="#10062F"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																		"
																	>
																		<span
																			style="
																				display: inline-flex;
																				align-items: center;
																				color: #200d5d;
																				font-weight: 100;
																				margin-left: 0.25rem;
																			"
																			>Starting 23/05</span
																		>
																		<span
																			style="
																				width: 0.25rem;
																				height: 0.25rem;
																				border-radius: 9999px;
																				background-color: #8f90a6;
																				margin-left: 0.25rem;
																			"
																		></span>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.66667 1.66669C5.75 1.66669 5 2.41669 5 3.33335V5.97502C5 6.41669 5.175 6.84169 5.49167 7.15835L8.33333 10L5.48333 12.85C5.175 13.1667 5 13.5917 5 14.0334V16.6667C5 17.5834 5.75 18.3334 6.66667 18.3334H13.3333C14.25 18.3334 15 17.5834 15 16.6667V14.0334C15 13.5917 14.825 13.1667 14.5167 12.8584L11.6667 10L14.5083 7.16669C14.825 6.85002 15 6.42502 15 5.98335V3.33335C15 2.41669 14.25 1.66669 13.3333 1.66669H6.66667ZM13.3333 13.75V15.8334C13.3333 16.2917 12.9583 16.6667 12.5 16.6667H7.5C7.04167 16.6667 6.66667 16.2917 6.66667 15.8334V13.75L10 10.4167L13.3333 13.75ZM10 9.58335L6.66667 6.25002V4.16669C6.66667 3.70835 7.04167 3.33335 7.5 3.33335H12.5C12.9583 3.33335 13.3333 3.70835 13.3333 4.16669V6.25002L10 9.58335Z"
																				fill="#10062F"
																			/>
																		</svg>
																		<span style="margin-left: 0.25rem"
																			>Up to 6-12months</span
																		>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																	"
																>
																	<div
																		style="
																			flex: none;
																			width: 1.5rem;
																			height: 1.5rem;
																		"
																	>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33335C2.41669 3.33331 1.66669 4.08331 1.66669 4.99998V15C1.66669 15.9166 2.41669 16.6666 3.33335 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 15V4.99998ZM16.6667 4.99998L10 9.15831L3.33335 4.99998H16.6667ZM16.6667 15H3.33335V6.66665L10 10.8333L16.6667 6.66665V15Z"
																				fill="#323232"
																			/>
																		</svg>
																	</div>
																	<div style="font-weight: 100; color: #200d5d">
																		Hi!, my name is Brittany. I am a teacher...
																	</div>
																</div>
															</div>
														</a>
													</div>
												</td>
											</tr>
											<tr>
												<td
													style="
														font-family: Arial, Helvetica, sans-serif;
														box-sizing: border-box;
														height: 229px;
														position: relative;
														overflow: hidden;
														border-radius: 1.5rem;
													"
												>
													<div
														style="
															border: 1px solid #8f90a6;
															display: inline-flex;
															margin-bottom: 1rem;
															border-radius: 1.5rem;
														"
													>
														<a
															href="/"
															target="_self"
															style="
																width: 100%;
																height: 30rem;
																text-decoration: none;
															"
														>
															<div style="display: flex; flex-direction: row">
																<div
																	style="
																		position: relative;
																		flex-grow: 0;
																		height: 16rem;
																		overflow: hidden;
																	"
																>
																	<span
																		style="
																			position: absolute;
																			right: 0;
																			top: 1.75rem;
																			width: 2.75rem;
																		"
																	>
																		<svg
																			width="36"
																			height="36"
																			viewBox="0 0 36 36"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18 32.025L15.825 30.045C8.1 23.04 3 18.42 3 12.75C3 8.13 6.63 4.5 11.25 4.5C13.86 4.5 16.365 5.715 18 7.635C19.635 5.715 22.14 4.5 24.75 4.5C29.37 4.5 33 8.13 33 12.75C33 18.42 27.9 23.04 20.175 30.06L18 32.025Z"
																				fill="#D80027"
																			/>
																		</svg>
																	</span>
																	<img
																		src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea"
																		style="border-radius: 1.5rem; width: 100%"
																		width="100%"
																	/>
																</div>
															</div>
															<div
																style="
																	height: 14rem;
																	margin-left: 1rem;
																	margin-right: 1rem;
																"
															>
																<div
																	style="
																		margin-top: 0.5rem;
																		margin-bottom: 1.5rem;
																	"
																>
																	<div>
																		<h4
																			style="
																				font-size: 1.5rem;
																				color: #10062f;
																				line-height: 1.4rem;
																				font-weight: 600;
																				-webkit-font-smoothing: antialiased;
																				margin-bottom: 0.5rem;
																			"
																		>
																			Brittany<span
																				style="
																					font-weight: 600;
																					font-size: 16px;
																					margin-left: 0.5rem;
																				"
																				>27yrs</span
																			>
																		</h4>
																		<p
																			style="
																				font-size: 0.875rem;
																				color: #8f90a6;
																				font-weight: 100;
																				line-height: 1;
																			"
																		>
																			Has 2years experience
																		</p>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 1rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M10 1.66666C5.40002 1.66666 1.66669 5.4 1.66669 10C1.66669 14.6 5.40002 18.3333 10 18.3333C14.6 18.3333 18.3334 14.6 18.3334 10C18.3334 5.4 14.6 1.66666 10 1.66666ZM7.74169 13.575L4.75002 10.5833C4.42502 10.2583 4.42502 9.73333 4.75002 9.40833C5.07502 9.08333 5.60002 9.08333 5.92502 9.40833L8.33335 11.8083L14.0667 6.075C14.3917 5.75 14.9167 5.75 15.2417 6.075C15.5667 6.4 15.5667 6.925 15.2417 7.25L8.91669 13.575C8.60002 13.9 8.06669 13.9 7.74169 13.575Z"
																				fill="#16A34A"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																			margin-left: 0.25rem;
																		"
																	>
																		Mon, Tue, Wed & Fri
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M11.6667 0.833313H8.33336C7.87502 0.833313 7.50002 1.20831 7.50002 1.66665C7.50002 2.12498 7.87502 2.49998 8.33336 2.49998H11.6667C12.125 2.49998 12.5 2.12498 12.5 1.66665C12.5 1.20831 12.125 0.833313 11.6667 0.833313ZM10 11.6666C10.4584 11.6666 10.8334 11.2916 10.8334 10.8333V7.49998C10.8334 7.04165 10.4584 6.66665 10 6.66665C9.54169 6.66665 9.16669 7.04165 9.16669 7.49998V10.8333C9.16669 11.2916 9.54169 11.6666 10 11.6666ZM15.8584 6.15831L16.4834 5.53331C16.8 5.21665 16.8084 4.69165 16.4834 4.36665L16.475 4.35831C16.15 4.03331 15.6334 4.04165 15.3084 4.35831L14.6834 4.98331C13.3917 3.94998 11.7667 3.33331 10 3.33331C6.00002 3.33331 2.60002 6.63331 2.50002 10.6333C2.39169 14.8666 5.78336 18.3333 10 18.3333C14.15 18.3333 17.5 14.975 17.5 10.8333C17.5 9.06665 16.8834 7.44165 15.8584 6.15831ZM10 16.6666C6.77502 16.6666 4.16669 14.0583 4.16669 10.8333C4.16669 7.60831 6.77502 4.99998 10 4.99998C13.225 4.99998 15.8334 7.60831 15.8334 10.8333C15.8334 14.0583 13.225 16.6666 10 16.6666Z"
																				fill="#10062F"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																		"
																	>
																		<span
																			style="
																				display: inline-flex;
																				align-items: center;
																				color: #200d5d;
																				font-weight: 100;
																				margin-left: 0.25rem;
																			"
																			>Starting 23/05</span
																		>
																		<span
																			style="
																				width: 0.25rem;
																				height: 0.25rem;
																				border-radius: 9999px;
																				background-color: #8f90a6;
																				margin-left: 0.25rem;
																			"
																		></span>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.66667 1.66669C5.75 1.66669 5 2.41669 5 3.33335V5.97502C5 6.41669 5.175 6.84169 5.49167 7.15835L8.33333 10L5.48333 12.85C5.175 13.1667 5 13.5917 5 14.0334V16.6667C5 17.5834 5.75 18.3334 6.66667 18.3334H13.3333C14.25 18.3334 15 17.5834 15 16.6667V14.0334C15 13.5917 14.825 13.1667 14.5167 12.8584L11.6667 10L14.5083 7.16669C14.825 6.85002 15 6.42502 15 5.98335V3.33335C15 2.41669 14.25 1.66669 13.3333 1.66669H6.66667ZM13.3333 13.75V15.8334C13.3333 16.2917 12.9583 16.6667 12.5 16.6667H7.5C7.04167 16.6667 6.66667 16.2917 6.66667 15.8334V13.75L10 10.4167L13.3333 13.75ZM10 9.58335L6.66667 6.25002V4.16669C6.66667 3.70835 7.04167 3.33335 7.5 3.33335H12.5C12.9583 3.33335 13.3333 3.70835 13.3333 4.16669V6.25002L10 9.58335Z"
																				fill="#10062F"
																			/>
																		</svg>
																		<span style="margin-left: 0.25rem"
																			>Up to 6-12months</span
																		>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																	"
																>
																	<div
																		style="
																			flex: none;
																			width: 1.5rem;
																			height: 1.5rem;
																		"
																	>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33335C2.41669 3.33331 1.66669 4.08331 1.66669 4.99998V15C1.66669 15.9166 2.41669 16.6666 3.33335 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 15V4.99998ZM16.6667 4.99998L10 9.15831L3.33335 4.99998H16.6667ZM16.6667 15H3.33335V6.66665L10 10.8333L16.6667 6.66665V15Z"
																				fill="#323232"
																			/>
																		</svg>
																	</div>
																	<div style="font-weight: 100; color: #200d5d">
																		Hi!, my name is Brittany. I am a teacher...
																	</div>
																</div>
															</div>
														</a>
													</div>
												</td>
											</tr>
											<tr>
												<td
													style="
														font-family: Arial, Helvetica, sans-serif;
														box-sizing: border-box;
														height: 229px;
														position: relative;
														overflow: hidden;
														border-radius: 1.5rem;
													"
												>
													<div
														style="
															border: 1px solid #8f90a6;
															display: inline-flex;
															border-radius: 1.5rem;
														"
													>
														<a
															href="/"
															target="_self"
															style="
																width: 100%;
																height: 30rem;
																text-decoration: none;
															"
														>
															<div style="display: flex; flex-direction: row">
																<div
																	style="
																		position: relative;
																		flex-grow: 0;
																		height: 16rem;
																		overflow: hidden;
																	"
																>
																	<span
																		style="
																			position: absolute;
																			right: 0;
																			top: 1.75rem;
																			width: 2.75rem;
																		"
																	>
																		<svg
																			width="36"
																			height="36"
																			viewBox="0 0 36 36"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18 32.025L15.825 30.045C8.1 23.04 3 18.42 3 12.75C3 8.13 6.63 4.5 11.25 4.5C13.86 4.5 16.365 5.715 18 7.635C19.635 5.715 22.14 4.5 24.75 4.5C29.37 4.5 33 8.13 33 12.75C33 18.42 27.9 23.04 20.175 30.06L18 32.025Z"
																				fill="#D80027"
																			/>
																		</svg>
																	</span>
																	<img
																		src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea"
																		style="border-radius: 1.5rem; width: 100%"
																		width="100%"
																	/>
																</div>
															</div>
															<div
																style="
																	height: 14rem;
																	margin-left: 1rem;
																	margin-right: 1rem;
																"
															>
																<div
																	style="
																		margin-top: 0.5rem;
																		margin-bottom: 1.5rem;
																	"
																>
																	<div>
																		<h4
																			style="
																				font-size: 1.5rem;
																				color: #10062f;
																				line-height: 1.4rem;
																				font-weight: 600;
																				-webkit-font-smoothing: antialiased;
																				margin-bottom: 0.5rem;
																			"
																		>
																			Lisa<span
																				style="
																					font-weight: 600;
																					font-size: 16px;
																					margin-left: 0.5rem;
																				"
																				>23yrs</span
																			>
																		</h4>
																		<p
																			style="
																				font-size: 0.875rem;
																				color: #8f90a6;
																				font-weight: 100;
																				line-height: 1;
																			"
																		>
																			Has 2years experience
																		</p>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 1rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M10 1.66666C5.40002 1.66666 1.66669 5.4 1.66669 10C1.66669 14.6 5.40002 18.3333 10 18.3333C14.6 18.3333 18.3334 14.6 18.3334 10C18.3334 5.4 14.6 1.66666 10 1.66666ZM7.74169 13.575L4.75002 10.5833C4.42502 10.2583 4.42502 9.73333 4.75002 9.40833C5.07502 9.08333 5.60002 9.08333 5.92502 9.40833L8.33335 11.8083L14.0667 6.075C14.3917 5.75 14.9167 5.75 15.2417 6.075C15.5667 6.4 15.5667 6.925 15.2417 7.25L8.91669 13.575C8.60002 13.9 8.06669 13.9 7.74169 13.575Z"
																				fill="#16A34A"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																			margin-left: 0.25rem;
																		"
																	>
																		Mon, Tue, Wed & Fri
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																		align-items: center;
																	"
																>
																	<div style="flex: none; width: 1.25rem">
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M11.6667 0.833313H8.33336C7.87502 0.833313 7.50002 1.20831 7.50002 1.66665C7.50002 2.12498 7.87502 2.49998 8.33336 2.49998H11.6667C12.125 2.49998 12.5 2.12498 12.5 1.66665C12.5 1.20831 12.125 0.833313 11.6667 0.833313ZM10 11.6666C10.4584 11.6666 10.8334 11.2916 10.8334 10.8333V7.49998C10.8334 7.04165 10.4584 6.66665 10 6.66665C9.54169 6.66665 9.16669 7.04165 9.16669 7.49998V10.8333C9.16669 11.2916 9.54169 11.6666 10 11.6666ZM15.8584 6.15831L16.4834 5.53331C16.8 5.21665 16.8084 4.69165 16.4834 4.36665L16.475 4.35831C16.15 4.03331 15.6334 4.04165 15.3084 4.35831L14.6834 4.98331C13.3917 3.94998 11.7667 3.33331 10 3.33331C6.00002 3.33331 2.60002 6.63331 2.50002 10.6333C2.39169 14.8666 5.78336 18.3333 10 18.3333C14.15 18.3333 17.5 14.975 17.5 10.8333C17.5 9.06665 16.8834 7.44165 15.8584 6.15831ZM10 16.6666C6.77502 16.6666 4.16669 14.0583 4.16669 10.8333C4.16669 7.60831 6.77502 4.99998 10 4.99998C13.225 4.99998 15.8334 7.60831 15.8334 10.8333C15.8334 14.0583 13.225 16.6666 10 16.6666Z"
																				fill="#10062F"
																			/>
																		</svg>
																	</div>
																	<div
																		style="
																			display: inline-flex;
																			flex-grow: 1;
																			align-items: center;
																			color: #200d5d;
																			font-weight: 100;
																		"
																	>
																		<span
																			style="
																				display: inline-flex;
																				align-items: center;
																				color: #200d5d;
																				font-weight: 100;
																				margin-left: 0.25rem;
																			"
																			>Starting 23/05</span
																		>
																		<span
																			style="
																				width: 0.25rem;
																				height: 0.25rem;
																				border-radius: 9999px;
																				background-color: #8f90a6;
																				margin-left: 0.25rem;
																			"
																		></span>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.66667 1.66669C5.75 1.66669 5 2.41669 5 3.33335V5.97502C5 6.41669 5.175 6.84169 5.49167 7.15835L8.33333 10L5.48333 12.85C5.175 13.1667 5 13.5917 5 14.0334V16.6667C5 17.5834 5.75 18.3334 6.66667 18.3334H13.3333C14.25 18.3334 15 17.5834 15 16.6667V14.0334C15 13.5917 14.825 13.1667 14.5167 12.8584L11.6667 10L14.5083 7.16669C14.825 6.85002 15 6.42502 15 5.98335V3.33335C15 2.41669 14.25 1.66669 13.3333 1.66669H6.66667ZM13.3333 13.75V15.8334C13.3333 16.2917 12.9583 16.6667 12.5 16.6667H7.5C7.04167 16.6667 6.66667 16.2917 6.66667 15.8334V13.75L10 10.4167L13.3333 13.75ZM10 9.58335L6.66667 6.25002V4.16669C6.66667 3.70835 7.04167 3.33335 7.5 3.33335H12.5C12.9583 3.33335 13.3333 3.70835 13.3333 4.16669V6.25002L10 9.58335Z"
																				fill="#10062F"
																			/>
																		</svg>
																		<span style="margin-left: 0.25rem"
																			>Up to 6-12months</span
																		>
																	</div>
																</div>

																<div
																	style="
																		display: flex;
																		flex-direction: row;
																		margin-bottom: 0.75rem;
																	"
																>
																	<div
																		style="
																			flex: none;
																			width: 1.5rem;
																			height: 1.5rem;
																		"
																	>
																		<svg
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33335C2.41669 3.33331 1.66669 4.08331 1.66669 4.99998V15C1.66669 15.9166 2.41669 16.6666 3.33335 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 15V4.99998ZM16.6667 4.99998L10 9.15831L3.33335 4.99998H16.6667ZM16.6667 15H3.33335V6.66665L10 10.8333L16.6667 6.66665V15Z"
																				fill="#323232"
																			/>
																		</svg>
																	</div>
																	<div style="font-weight: 100; color: #200d5d">
																		Hi!, my name is Brittany. I am a teacher...
																	</div>
																</div>
															</div>
														</a>
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
											font-family: Arial, Helvetica, sans-serif;
											box-sizing: border-box;
											padding: 55px 0 50px 35px;
										"
									>
										<svg
											width="63"
											height="63"
											viewBox="0 0 63 63"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M49.875 2.625H13.125C10.2375 2.625 7.90125 4.9875 7.90125 7.875L7.875 41.8162C7.875 43.6275 8.79375 45.2288 10.185 46.1738L30.0562 59.4037C30.9487 59.9812 32.0775 59.9812 32.97 59.4037L52.815 46.1738C54.2063 45.2288 55.125 43.6275 55.125 41.8162V7.875C55.125 4.9875 52.7625 2.625 49.875 2.625ZM48.0375 20.2125L28.1138 40.1362C27.09 41.16 25.4363 41.16 24.4125 40.1362L14.9887 30.7125C13.965 29.6887 13.965 28.035 14.9887 27.0112C16.0125 25.9875 17.6662 25.9875 18.69 27.0112L26.25 34.5713L44.31 16.5112C45.3337 15.4875 46.9875 15.4875 48.0113 16.5112C49.035 17.535 49.0612 19.1887 48.0375 20.2125Z"
												fill="#5427E2"
											/>
										</svg>
										<p
											style="
												font-family: Arial, Helvetica, sans-serif;
												box-sizing: border-box;
												color: #200d5d;
												font-size: 16px;
												line-height: 1.5em;
												margin-top: 20px;
												text-align: left;
											"
										>
											Earn more points towards your discount voucher
										</p>
									</td>
								</tr>
								<tr>
									<td
										class="content-cell"
										style="
											font-family: Arial, Helvetica, sans-serif;
											box-sizing: border-box;
											padding-left: 35px;
											padding-bottom: 50px;
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
											font-family: Arial, Helvetica, sans-serif;
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
												style="color: #adffd6; text-decoration: none"
												>info@nannynina.nl</a
											>
										</p>
										<table role="presentation" style="margin: 20px 0">
											<tr>
												<td style="padding: 0">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="display: block; border: 0"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="display: block; border: 0"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="display: block; border: 0"
													/></a>
												</td>
												<td style="padding: 0 0 0 16px">
													<a href="#" target="_blank"
														><img
															src="https://img.freepik.com/free-vector/luxury-white-gold-background_174506-510.jpg"
															alt="PlaceholderAltText"
															width="20"
															height="20"
															style="display: block; border: 0"
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
												style="color: #adffd6; text-decoration: none"
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
												style="color: #adffd6; text-decoration: none"
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
												style="color: #adffd6; text-decoration: none"
												>Terms of Service</a
											>
											and
											<a
												href="#"
												target="_blank"
												style="color: #adffd6; text-decoration: none"
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
											font-family: Arial, Helvetica, sans-serif;
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
