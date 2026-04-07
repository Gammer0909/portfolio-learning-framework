class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <h1>
               <a href="/index.html">Kyle Garzon</a>
            </h1>
            <a href="/biography/index.html">Biography</a>
            <a href="/organizations/index.html">Organizations</a>
            <a href="/resume/index.html">Resume</a>
			<a href="/education/index.html">Education</a>
			<a href="/recommendations/index.html">Recommendations</a>
			<a href="/skills-experience/index.html">Skills</a>
        </nav>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="contact">
                <p>Kyle Garzon</p>
                <p>kylebrooks.garzon@gmail.com</p>
                <a href="https://www.goodwall.io/kyle-garzon-cca5" target="_blank">Goodwall</a>
            </div>
            <p>© Kyle Garzon, 2026</p>
        </footer>
    `
    }
}

class Resume extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
		<div>
			<h1>
				Kyle Garzon
			<h1>
			<p style="margin-bottom:0pt; line-height:150%">
				<span style="font-family:Roboto">(806) 886-4322 | kylebrooks.garzon@gmail.com | 1507 Canyon Dr. | kylegarzon.dev</span>
			</p>
			<div style="text-align:center">
				<hr style="width:100%; height:1.5pt" />
			</div>
			<h2 style="line-height:normal">
				<span style="font-family:Roboto">Summary</span>
			</h2>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Designing backend systems to last, a Junior Backend Engineer experienced in developing backend systems with Golang and JavaScript, with a strong ability to ensure working and practical solutions, with excellent communication and adaptability.</span>
			</p>
			<h2 style="line-height:normal">
				<span style="font-family:Roboto">Education</span>
			</h2>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Bachelor of Science in Computer Science, University of Oklahoma, Norman, OK — </span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Anticipated May 2030</span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Minor in Mathematics</span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">&#xa0;</span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Associate of Science in General Studies, Frank Phillips College, Borger, TX — </span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">Anticipated May 2026</span>
			</p>
			<p style="margin-bottom:0pt; line-height:normal">
				<span style="font-family:Roboto">GPA: 3.4</span>
			</p>
			<h2 style="line-height:normal">
				<span style="font-family:Roboto">Skills</span>
			</h2>
			<ul class="awlist1" style="margin:0pt; padding-left:0pt">
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Programming Languages: Proficient with Go, Python, C#, Java and JavaScript through self-study and project creation. Two-time regional qualifier in UIL Computer Science competitions using Java. 2023, 2024
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Communication: Strength in oral communication as a two-time TFA State qualifier in Lincoln-Douglas debate and NSDA National qualifier for World Schools Debate. Proven proficiency in written communication through enrollment in dual-credit English Composition classes.
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Technology: Proficient with Windows, MacOS and Linux operating systems, along with various softwares including the Microsoft Office suite. I have an ability to quickly pick up software, proven teaching myself FL Studio in three months. 
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Task Management: Effectively managed multiple tasks and changed priorities on the fly, working as an Event Worker at The Dome. Balanced and adapted to management’s priorities and ensured a timely manner of completion.
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Consistently managed client requests to ensure both timely delivery and high-quality, accurate results. Prioritizing clear communication and precision remains a cornerstone of my approach to client success.
				</li>
			</ul>
			<h2 style="line-height:normal">
				<span style="font-family:Roboto">Achievements</span>
			</h2>
			<ul class="awlist2" style="margin:0pt; padding-left:0pt">
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>National Honor Society Inductee — August 2024
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Honor Roll, Frank Phillips College — Fall 2024, May 2025
				</li>
			</ul>
			<h2 style="line-height:normal">
				<span style="font-family:Roboto">Organizations</span>
			</h2>
			<ul class="awlist3" style="margin:0pt; padding-left:0pt">
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>National Honor Society — Active Member, Fall 2024 – Present
				</li>
				<li style="margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-family:Roboto">
					<span style="width:11.36pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>Borger Youth Advisory Council — Treasurer, Summer 2023 – Present
				</li>
			</ul>
		</div>
        `
    }
}

customElements.define('site-header', Header)
customElements.define('site-footer', Footer)
customElements.define('docx-resume', Resume)