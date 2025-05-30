<h1>CV Generator and Management</h1>

<h2>Navigation</h2>
<ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#how-it-works">How it works</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="api-endpoints">API Endpoints</a></li>
    <li><a href="#requirements">Requirements</a></li>
</ul>

<br>

<h2 id="overview">Overview</h2>
<p>This is a full-stack Node.js application for creating, previewing, downloading, and managing CVs in multiple different templates/layouts/styles. It currently uses a JSON file as database and supports profile photo uploads, dynamic search/filter functionality, and client-side PDF printing assistance.</p>

<br>

<h2 id="usage">How To Use</h2>

![image](https://github.com/user-attachments/assets/28c6ceab-ec80-4c08-9e77-dcc01bbf1229)

<p>After clicking on "Create my CV", you will be redirected to the templates page where you can choose one of the templates that currently exist :</p>

![image](https://github.com/user-attachments/assets/803809a2-47e6-477e-aa75-b9c050c3e55f)

<p>After clicking on one of the templates, a form will be tailored for you based on the style you choose : </p>

![image](https://github.com/user-attachments/assets/95459d46-6f59-4a9a-bde3-f5f08c4fef68)

<p>Simply fill in your information, and click on "Create CV" : </p>

![image](https://github.com/user-attachments/assets/cbf6bf05-ab03-46e5-9bd9-77d3d0ce411b)

<p>You're going to be redirected to a page containing your CV, along with other peoples' CVs. In this page, you could also search for other peoples' CVs and potentially get some inspiration via search filters : </p>

![image](https://github.com/user-attachments/assets/10ef7f0e-3a78-48f7-9571-438f8dc3fea8)

![image](https://github.com/user-attachments/assets/7e826a65-ab17-45fe-8c1e-3b02207b4a5a)

<p>Once you've decided to download your CV, simply click on "Preview and Download". You're going to be redirected to a page where your CV is previewed : </p>

![image](https://github.com/user-attachments/assets/6e2f9dfd-4f86-4d14-a0e5-e4665ae2d0a6)

<p>From there, you can either directly save it as PDF, or learn more about how to properly print your CV by clicking on "How to properly print CV".</p>

<h2 id="how-it-works">How it Works</h2>

<h3>1. Template Selection</h3>
<ul>
    <li>Users pick a layout via query string (e.g., <code>?template=creative</code>).</li>
    <li>The selected layout applies a specific CSS class to scope styles dynamically.</li>
</ul>

<h3>2. Form to JSON</h3>
<ul>
    <li>Form fields use bracket notation (e.g., <code>profile[firstName]</code>, <code>education[0][diploma]</code>).</li>
    <li><code>express.urlencoded({ extended: true })</code> parses these into nested JavaScript objects.</li>
</ul>

<h3>3. File Uploads</h3>
<ul>
    <li>Profile photos are uploaded using <code>multer</code> and stored in <code>/public/uploads</code>.</li>
    <li>Files are restricted to a 10 MB maximum size.</li>
</ul>

<h3>4. Repository Layer</h3>
<ul>
    <li>CV data is read and written to <code>src/data/cvs.json</code>.</li>
    <li>New CVs are appended and the file is rewritten to maintain structure.</li>
</ul>

<h3>5. Search and Filter</h3>
<ul>
    <li>The <code>/people-cvs</code> route accepts query parameters (e.g., <code>lastName=Smith</code>).</li>
    <li>Filtering is performed in-memory based on these parameters.</li>
</ul>

<h3>6. Preview and Print</h3>
<ul>
    <li>A separate preview view displays a full-page version of the CV.</li>
    <li>Users can print/save via the browser's print tool (<code>window.print()</code>).</li>
    <li>An additional help page outlines recommended printing settings.</li>
</ul>

<br>

<h2 id="features">Features</h2>
<ul>
    <li>Multiple CV templates</li>
    <li>Photo uploads</li>
    <li>Client-side preview</li>
    <li>Search and filter others' CVs</li>
    <li>Download/Print using built-in browser tools</li>
    <li>Printing guide with detailed tips and screenshots</li>
</ul>

<br>

<h2 id="testing">Testing</h2>
<p>This project uses <code>Jest</code> for unit testing. To run tests, use the following command: </p>
<pre><code>npm test</code></pre>
<p>You can find test files under the <code>tests</code> directory or with the <code>.test.js</code> suffix alongside your modules.</p>

<br>

<h2 id="api-endpoints">API Endpoints</h2>

<h3>GET /api/people-cvs</h3>
<p>Fetches all CVs or filters them based on query parameters.</p>
<p><b>Query Parameters:</b></p>
<ul>
    <li><code>firstName</code> – Filter by first name</li>
    <li><code>lastName</code> – Filter by last name</li>
    <li><code>otherFields</code> – You can filter by other field that exists in the CV object</li>
</ul>
<p>Returns matching CVs as JSON.</p>

<br>

<h2 id="requirements">Requirements</h2>
<ul>
    <li>Node.js 18+</li>
    <li>Express</li>
    <li>express-ejs-layouts</li>
    <li>Multer</li>
    <li>Jest (for unit testing)</li>
</ul>
