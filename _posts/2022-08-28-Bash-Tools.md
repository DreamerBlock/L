---
keywords: fastai
title: Title
nb_path: _notebooks/2022-08-28-Bash-Tools.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-08-28-Bash-Tools.ipynb
-->

<div class="container" id="notebook-container">
        
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<hr>
<p>title: Bash kernel
layout: post</p>
<h2 id="description:-This-shows-all-the-tools-I-have">description: This shows all the tools I have<a class="anchor-link" href="#description:-This-shows-all-the-tools-I-have"> </a></h2>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Using conditional statement to create a project directory and project&quot;</span>

<span class="c1"># Variable section</span>
<span class="n">export</span> <span class="n">project_dir</span><span class="o">=</span><span class="err">$</span><span class="n">HOME</span><span class="o">/</span><span class="n">vscode</span>  <span class="c1"># change vscode to different name to test git clone</span>
<span class="n">export</span> <span class="n">project</span><span class="o">=</span><span class="err">$</span><span class="n">project_dir</span><span class="o">/</span><span class="n">APCSP</span>  <span class="c1"># change APCSP to name of project from git clone</span>
<span class="n">export</span> <span class="n">project_repo</span><span class="o">=</span><span class="s2">&quot;https://github.com/nighthawkcoders/APCSP.git&quot;</span>  <span class="c1"># change to project of choice</span>

<span class="n">cd</span> <span class="o">~</span>    <span class="c1"># start in home directory</span>

<span class="c1"># Conditional block to make a project directory</span>
<span class="k">if</span> <span class="p">[</span> <span class="err">!</span> <span class="o">-</span><span class="n">d</span> <span class="err">$</span><span class="n">project_dir</span> <span class="p">]</span>
<span class="n">then</span> 
    <span class="n">echo</span> <span class="s2">&quot;Directory $project_dir does not exists... makinng directory $project_dir&quot;</span>
    <span class="n">mkdir</span> <span class="o">-</span><span class="n">p</span> <span class="err">$</span><span class="n">project_dir</span>
<span class="n">fi</span>
<span class="n">echo</span> <span class="s2">&quot;Directory $project_dir exists.&quot;</span> 

<span class="c1"># Conditional block to git clone a project from project_repo</span>
<span class="k">if</span> <span class="p">[</span> <span class="err">!</span> <span class="o">-</span><span class="n">d</span> <span class="err">$</span><span class="n">project</span> <span class="p">]</span>
<span class="n">then</span>
    <span class="n">echo</span> <span class="s2">&quot;Directory $project does not exists... cloning $project_repo&quot;</span>
    <span class="n">cd</span> <span class="err">$</span><span class="n">project_dir</span>
    <span class="n">git</span> <span class="n">clone</span> <span class="err">$</span><span class="n">project_repo</span>
    <span class="n">cd</span> <span class="o">~</span>
<span class="n">fi</span>
<span class="n">echo</span> <span class="s2">&quot;Directory $project exists.&quot;</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Using conditional statement to create a project directory and project
Directory /home/dreamerblock/vscode exists.
Directory /home/dreamerblock/vscode/APCSP exists.
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Navigate to project, then navigate to area wwhere files were cloned&quot;</span>
<span class="n">cd</span> <span class="err">$</span><span class="n">project</span>
<span class="n">pwd</span>

<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;list top level or root of files with project pulled from github&quot;</span>
<span class="n">ls</span>

<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;list again with hidden files pulled from github&quot;</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">a</span>   <span class="c1"># hidden files flag, many shell commands have flags</span>

<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;list all files in long format&quot;</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">al</span>   <span class="c1"># all files and long listing</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Navigate to project, then navigate to area wwhere files were cloned
/home/dreamerblock/vscode/APCSP

list top level or root of files with project pulled from github
<span class="ansi-green-intense-fg ansi-bold">Gemfile</span>    <span class="ansi-blue-intense-fg ansi-bold">_action_files</span>    <span class="ansi-blue-intense-fg ansi-bold">_layouts</span>    <span class="ansi-blue-intense-fg ansi-bold">_posts</span>  <span class="ansi-green-intense-fg ansi-bold">docker-compose.yml</span>
LICENSE    _config.yml      <span class="ansi-blue-intense-fg ansi-bold">_notebooks</span>  <span class="ansi-blue-intense-fg ansi-bold">_sass</span>   <span class="ansi-blue-intense-fg ansi-bold">images</span>
<span class="ansi-green-intense-fg ansi-bold">Makefile</span>   <span class="ansi-blue-intense-fg ansi-bold">_fastpages_docs</span>  <span class="ansi-blue-intense-fg ansi-bold">_pages</span>      <span class="ansi-blue-intense-fg ansi-bold">_word</span>   index.html
<span class="ansi-green-intense-fg ansi-bold">README.md</span>  <span class="ansi-blue-intense-fg ansi-bold">_includes</span>        <span class="ansi-blue-intense-fg ansi-bold">_plugins</span>    <span class="ansi-blue-intense-fg ansi-bold">assets</span>  <span class="ansi-blue-intense-fg ansi-bold">python</span>

list again with hidden files pulled from github
<span class="ansi-blue-intense-fg ansi-bold">.</span>                   .gitignore  <span class="ansi-blue-intense-fg ansi-bold">_action_files</span>    <span class="ansi-blue-intense-fg ansi-bold">_pages</span>    <span class="ansi-green-intense-fg ansi-bold">docker-compose.yml</span>
<span class="ansi-blue-intense-fg ansi-bold">..</span>                  <span class="ansi-blue-intense-fg ansi-bold">.vscode</span>     _config.yml      <span class="ansi-blue-intense-fg ansi-bold">_plugins</span>  <span class="ansi-blue-intense-fg ansi-bold">images</span>
.devcontainer.json  <span class="ansi-green-intense-fg ansi-bold">Gemfile</span>     <span class="ansi-blue-intense-fg ansi-bold">_fastpages_docs</span>  <span class="ansi-blue-intense-fg ansi-bold">_posts</span>    index.html
<span class="ansi-blue-intense-fg ansi-bold">.git</span>                LICENSE     <span class="ansi-blue-intense-fg ansi-bold">_includes</span>        <span class="ansi-blue-intense-fg ansi-bold">_sass</span>     <span class="ansi-blue-intense-fg ansi-bold">python</span>
.gitattributes      <span class="ansi-green-intense-fg ansi-bold">Makefile</span>    <span class="ansi-blue-intense-fg ansi-bold">_layouts</span>         <span class="ansi-blue-intense-fg ansi-bold">_word</span>
<span class="ansi-blue-intense-fg ansi-bold">.github</span>             <span class="ansi-green-intense-fg ansi-bold">README.md</span>   <span class="ansi-blue-intense-fg ansi-bold">_notebooks</span>       <span class="ansi-blue-intense-fg ansi-bold">assets</span>

list all files in long format
total 120
drwxr-xr-x 18 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">.</span>
drwxr-xr-x  3 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">..</span>
-rw-r--r--  1 dreamerblock dreamerblock   420 Aug 25 11:33 .devcontainer.json
drwxr-xr-x  8 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">.git</span>
-rw-r--r--  1 dreamerblock dreamerblock    84 Aug 25 11:33 .gitattributes
drwxr-xr-x  4 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">.github</span>
-rw-r--r--  1 dreamerblock dreamerblock   917 Aug 25 11:33 .gitignore
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">.vscode</span>
-rwxr-xr-x  1 dreamerblock dreamerblock  1304 Aug 25 11:33 <span class="ansi-green-intense-fg ansi-bold">Gemfile</span>
-rw-r--r--  1 dreamerblock dreamerblock 11351 Aug 25 11:33 LICENSE
-rwxr-xr-x  1 dreamerblock dreamerblock  1422 Aug 25 11:33 <span class="ansi-green-intense-fg ansi-bold">Makefile</span>
-rwxr-xr-x  1 dreamerblock dreamerblock  3614 Aug 25 11:33 <span class="ansi-green-intense-fg ansi-bold">README.md</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_action_files</span>
-rw-r--r--  1 dreamerblock dreamerblock  3716 Aug 25 11:33 _config.yml
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_fastpages_docs</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_includes</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_layouts</span>
drwxr-xr-x  3 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_notebooks</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_pages</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_plugins</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_posts</span>
drwxr-xr-x  3 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_sass</span>
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">_word</span>
drwxr-xr-x  4 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">assets</span>
-rwxr-xr-x  1 dreamerblock dreamerblock  1136 Aug 25 11:33 <span class="ansi-green-intense-fg ansi-bold">docker-compose.yml</span>
drwxr-xr-x  5 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">images</span>
-rw-r--r--  1 dreamerblock dreamerblock  1061 Aug 25 11:33 index.html
drwxr-xr-x  2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">python</span>
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Look for posts&quot;</span>
<span class="n">export</span> <span class="n">posts</span><span class="o">=</span><span class="err">$</span><span class="n">project</span><span class="o">/</span><span class="n">_posts</span>  <span class="c1"># _posts inside project</span>
<span class="n">cd</span> <span class="err">$</span><span class="n">posts</span>  <span class="c1"># this should exist per fastpages</span>
<span class="n">pwd</span>  <span class="c1"># present working directory</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">l</span>  <span class="c1"># list posts</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Look for posts
/home/dreamerblock/vscode/APCSP/_posts
total 228
-rw-r--r-- 1 dreamerblock dreamerblock 21306 Aug 25 11:33 2022-06-01-TT160-deploy.md
-rw-r--r-- 1 dreamerblock dreamerblock  5861 Aug 25 11:33 2022-07-07-PBL-binary.md
-rw-r--r-- 1 dreamerblock dreamerblock  3085 Aug 25 11:33 2022-07-08-PBL-grade_calc.md
-rw-r--r-- 1 dreamerblock dreamerblock  3698 Aug 25 11:33 2022-07-08-PBL-graph.md
-rw-r--r-- 1 dreamerblock dreamerblock  5729 Aug 25 11:33 2022-07-08-PBL-life.md
-rw-r--r-- 1 dreamerblock dreamerblock 14387 Aug 25 11:33 2022-07-08-PBL-snake.md
-rw-r--r-- 1 dreamerblock dreamerblock   334 Aug 25 11:33 2022-07-10-PBL-database.md
-rw-r--r-- 1 dreamerblock dreamerblock  2908 Aug 25 11:33 2022-07-10-PBL-jokes.md
-rw-r--r-- 1 dreamerblock dreamerblock  4046 Aug 25 11:33 2022-07-10-PBL-rapidapi.md
-rw-r--r-- 1 dreamerblock dreamerblock  6685 Aug 25 11:33 2022-07-19-PBL-calculator.md
-rw-r--r-- 1 dreamerblock dreamerblock 23325 Aug 25 11:33 2022-07-25-CSP-workshop.md
-rw-r--r-- 1 dreamerblock dreamerblock  2333 Aug 25 11:33 2022-08-15-TP000-student_score_history.md
-rw-r--r-- 1 dreamerblock dreamerblock  4363 Aug 25 11:33 2022-08-15-TP100-pseudo_code.md
-rw-r--r-- 1 dreamerblock dreamerblock  7968 Aug 25 11:33 2022-08-15-TR100-tool_setup.md
-rw-r--r-- 1 dreamerblock dreamerblock 15026 Aug 25 11:33 2022-08-15-TT100-tools.md
-rw-r--r-- 1 dreamerblock dreamerblock  5590 Aug 25 11:33 2022-08-15-TT101-vscode-wsl.md
-rw-r--r-- 1 dreamerblock dreamerblock  2155 Aug 25 11:33 2022-08-22-TR110-intro_python.md
-rw-r--r-- 1 dreamerblock dreamerblock  5173 Aug 25 11:33 2022-08-22-TT110-fastpages.md
-rw-r--r-- 1 dreamerblock dreamerblock  2798 Aug 25 11:33 2022-08-22-TT110-focus.md
-rw-r--r-- 1 dreamerblock dreamerblock  2737 Aug 25 11:33 2022-08-29-TR120-data_abstract.md
-rw-r--r-- 1 dreamerblock dreamerblock 10683 Aug 25 11:33 2022-08-29-TT120-agile.md
-rw-r--r-- 1 dreamerblock dreamerblock  4498 Aug 25 11:33 2022-08-29-TT120-html_fragments.md
-rw-r--r-- 1 dreamerblock dreamerblock  9037 Aug 25 11:33 2022-09-05-TP130-create_performance_task.md
-rw-r--r-- 1 dreamerblock dreamerblock  7753 Aug 25 11:33 2022-09-05-TP131-create-task-bria.md
-rw-r--r-- 1 dreamerblock dreamerblock  8066 Aug 25 11:33 2022-09-05-TR130-creative_development.md
-rw-r--r-- 1 dreamerblock dreamerblock  3520 Aug 25 11:33 2022-09-05-TT130-applab.md
-rw-r--r-- 1 dreamerblock dreamerblock   720 Aug 25 11:33 README.md
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Look for notebooks&quot;</span>
<span class="n">export</span> <span class="n">notebooks</span><span class="o">=</span><span class="err">$</span><span class="n">project</span><span class="o">/</span><span class="n">_notebooks</span>  <span class="c1"># _notebooks is inside project</span>
<span class="n">cd</span> <span class="err">$</span><span class="n">notebooks</span>   <span class="c1"># this should exist per fastpages</span>
<span class="n">pwd</span>  <span class="c1"># present working directory</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">l</span>  <span class="c1"># list notebooks</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Look for notebooks
/home/dreamerblock/vscode/APCSP/_notebooks
total 144
-rw-r--r-- 1 dreamerblock dreamerblock 14243 Aug 25 11:33 2022-06-01-TT150-webapi_tutorial.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock  8653 Aug 25 11:33 2022-07-21-PBL-neo4j_intro.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock 11694 Aug 25 11:33 2022-08-22-TP110-python_hello.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock 20003 Aug 25 11:33 2022-08-22-TT110-anthony_and_sahil.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock  9525 Aug 25 11:33 2022-08-22-TT110-bash_tutorial.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock 35721 Aug 25 11:33 2022-08-25-tool_check.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock 10141 Aug 25 11:33 2022-08-29-TP120-python_lists.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock 12632 Aug 25 11:33 2022-09-05-TT130-js_tutorial.ipynb
-rw-r--r-- 1 dreamerblock dreamerblock   771 Aug 25 11:33 README.md
drwxr-xr-x 2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">images</span>
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Look for images in notebooks, print working directory, list files&quot;</span>
<span class="n">cd</span> <span class="err">$</span><span class="n">notebooks</span><span class="o">/</span><span class="n">images</span>  <span class="c1"># this should exist per fastpages</span>
<span class="n">pwd</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">l</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Look for images in notebooks, print working directory, list files
/home/dreamerblock/vscode/APCSP/_notebooks/images
total 100
-rw-r--r-- 1 dreamerblock dreamerblock 101617 Aug 25 11:33 <span class="ansi-magenta-intense-fg ansi-bold">kernels.png</span>
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Navigate to project, then navigate to area wwhere files were cloned&quot;</span>

<span class="n">cd</span> <span class="err">$</span><span class="n">project</span>
<span class="n">echo</span> <span class="s2">&quot;show the contents of README.md&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;&quot;</span>

<span class="n">cat</span> <span class="n">README</span><span class="o">.</span><span class="n">md</span>  <span class="c1"># show contents of file, in this case markdown</span>
<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;end of README.md&quot;</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Navigate to project, then navigate to area wwhere files were cloned
show the contents of README.md

[//]: # (This template replaces README.md when someone creates a new repo with the fastpages template.)

![](https://github.com/nighthawkcoders/APCSP/workflows/CI/badge.svg) 
![](https://github.com/nighthawkcoders/APCSP/workflows/GH-Pages%20Status/badge.svg) 
[![](https://img.shields.io/static/v1?label=fastai&amp;message=fastpages&amp;color=57aeac&amp;labelColor=black&amp;style=flat&amp;logo=data:image/png;base64,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)](https://github.com/fastai/fastpages)

https://nighthawkcoders.github.io/APCSP/

# My Blog


_powered by [fastpages](https://github.com/fastai/fastpages)_


## What To Do Next?

Great!  You have setup your repo.  Now its time to start writing content.  Some helpful links:

- [Writing Blogs With Jupyter](https://github.com/fastai/fastpages#writing-blog-posts-with-jupyter)

- [Writing Blogs With Markdown](https://github.com/fastai/fastpages#writing-blog-posts-with-markdown)

- [Writing Blog Posts With Word](https://github.com/fastai/fastpages#writing-blog-posts-with-microsoft-word)

- [(Optional) Preview Your Blog Locally](_fastpages_docs/DEVELOPMENT.md)

Note: you may want to remove example blog posts from the `_posts`,  `_notebooks` or `_word` folders (but leave them empty, don&#39;t delete these folders) if you don&#39;t want these blog posts to appear on your site.

Please use the [nbdev &amp; blogging channel](https://forums.fast.ai/c/fastai-users/nbdev/48) in the fastai forums for any questions or feature requests.

end of README.md
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">echo</span> <span class="s2">&quot;Show the shell environment variables, key on left of equal value on right&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;&quot;</span>

<span class="n">env</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Show the shell environment variables, key on left of equal value on right

SHELL=/bin/bash
PYTHONUNBUFFERED=1
project=/home/dreamerblock/vscode/APCSP
CONDA_EXE=/home/dreamerblock/anaconda3/bin/conda
_CE_M=
WSL_DISTRO_NAME=Ubuntu
ELECTRON_RUN_AS_NODE=1
VSCODE_AMD_ENTRYPOINT=vs/workbench/api/node/extensionHostProcess
NAME=Code
PWD=/home/dreamerblock/vscode/APCSP
LOGNAME=dreamerblock
CONDA_PREFIX=/home/dreamerblock/anaconda3
MOTD_SHOWN=update-motd
project_dir=/home/dreamerblock/vscode
HOME=/home/dreamerblock
LANG=C.UTF-8
WSL_INTEROP=/run/WSL/11_interop
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:
CONDA_PROMPT_MODIFIER=(base) 
PYDEVD_USE_FRAME_EVAL=NO
posts=/home/dreamerblock/vscode/APCSP/_posts
LESSCLOSE=/usr/bin/lesspipe %s %s
VSCODE_HANDLES_SIGPIPE=true
TERM=xterm-256color
_CE_CONDA=
LESSOPEN=| /usr/bin/lesspipe %s
USER=dreamerblock
PYTHONIOENCODING=utf-8
notebooks=/home/dreamerblock/vscode/APCSP/_notebooks
CONDA_SHLVL=1
SHLVL=2
PAGER=cat
project_repo=https://github.com/nighthawkcoders/APCSP.git
VSCODE_CWD=/mnt/c/Users/devsh/AppData/Local/Programs/Microsoft VS Code
CONDA_PYTHON_EXE=/home/dreamerblock/anaconda3/bin/python
PS1=[PEXP\[\]ECT_PROMPT&gt;
CONDA_DEFAULT_ENV=base
WSLENV=ELECTRON_RUN_AS_NODE/w:
VSCODE_WSL_EXT_LOCATION=/mnt/c/Users/devsh/.vscode/extensions/ms-vscode-remote.remote-wsl-0.66.3
XDG_DATA_DIRS=/usr/local/share:/usr/share:/var/lib/snapd/desktop
PATH=/home/dreamerblock/.local/bin:/home/dreamerblock/bin:/home/dreamerblock/anaconda3/bin:/home/dreamerblock/anaconda3/condabin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Intel/iCLS Client:/mnt/c/Program Files/Intel/iCLS Client:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0:/mnt/c/Program Files (x86)/Intel/Intel(R) Management Engine Components/DAL:/mnt/c/Program Files/Intel/Intel(R) Management Engine Components/DAL:/mnt/c/Program Files (x86)/Intel/Intel(R) Management Engine Components/IPT:/mnt/c/Program Files/Intel/Intel(R) Management Engine Components/IPT:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0:/mnt/c/WINDOWS/System32/OpenSSH:/mnt/c/Program Files/nodejs:/mnt/c/Users/devsh/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/devsh/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/devsh/AppData/Roaming/npm:/snap/bin
VSCODE_NLS_CONFIG={&#34;locale&#34;:&#34;en&#34;,&#34;availableLanguages&#34;:{}}
HOSTTYPE=x86_64
VSCODE_HANDLES_UNCAUGHT_ERRORS=true
OLDPWD=/home/dreamerblock/vscode/APCSP/_notebooks/images
VSCODE_IPC_HOOK_CLI=/tmp/vscode-ipc-9c2d8314-25bc-457c-9692-606c2240c649.sock
_=/usr/bin/env
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">cd</span> <span class="err">$</span><span class="n">project</span>

<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;show the secrets of .git&quot;</span>
<span class="n">cd</span> <span class="o">.</span><span class="n">git</span>
<span class="n">ls</span> <span class="o">-</span><span class="n">l</span>

<span class="n">echo</span> <span class="s2">&quot;&quot;</span>
<span class="n">echo</span> <span class="s2">&quot;look at config file&quot;</span>
<span class="n">cat</span> <span class="n">config</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>
show the secrets of .git
total 60
-rw-r--r-- 1 dreamerblock dreamerblock    23 Aug 25 11:33 HEAD
drwxr-xr-x 2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">branches</span>
-rw-r--r-- 1 dreamerblock dreamerblock   269 Aug 25 11:33 config
-rw-r--r-- 1 dreamerblock dreamerblock    73 Aug 25 11:33 description
drwxr-xr-x 2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">hooks</span>
-rw-r--r-- 1 dreamerblock dreamerblock 20021 Aug 25 11:33 index
drwxr-xr-x 2 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">info</span>
drwxr-xr-x 3 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">logs</span>
drwxr-xr-x 4 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">objects</span>
-rw-r--r-- 1 dreamerblock dreamerblock   271 Aug 25 11:33 packed-refs
drwxr-xr-x 5 dreamerblock dreamerblock  4096 Aug 25 11:33 <span class="ansi-blue-intense-fg ansi-bold">refs</span>

look at config file
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote &#34;origin&#34;]
	url = https://github.com/nighthawkcoders/APCSP.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch &#34;master&#34;]
	remote = origin
	merge = refs/heads/master
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 
