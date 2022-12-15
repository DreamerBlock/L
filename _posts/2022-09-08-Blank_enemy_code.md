---
keywords: fastai
title: Title
nb_path: _notebooks/Blank_enemy_code.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/Blank_enemy_code.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="k">global</span> <span class="n">name_replace</span>
<span class="n">name_replace</span> <span class="o">=</span> <span class="kc">True</span>
<span class="k">global</span> <span class="n">name_replace_health</span>
<span class="n">name_replace_health</span> <span class="o">=</span> <span class="mi">1</span>
<span class="k">def</span> <span class="nf">name_replace</span><span class="p">():</span>
  <span class="c1">#Blank1.0</span>
  <span class="n">enemy_alive</span> <span class="o">=</span> <span class="kc">True</span>
  <span class="n">enemy_name</span> <span class="o">=</span> <span class="s2">&quot;name_replace&quot;</span>
  <span class="n">lower_dm</span> <span class="o">=</span> <span class="mi">1</span>
  <span class="n">uper_dm</span> <span class="o">=</span> <span class="mi">2</span>
  <span class="n">enemy_EXP</span> <span class="o">=</span> <span class="mi">1000</span>
  <span class="c1">#Global verables v</span>
  <span class="k">global</span> <span class="n">name_replace</span>
  <span class="k">global</span> <span class="n">damage</span>
  <span class="k">global</span> <span class="n">mana</span>
  <span class="k">global</span> <span class="n">health</span>
  <span class="k">global</span> <span class="n">Dead</span>
  <span class="k">global</span> <span class="n">users_turn</span>
  <span class="k">global</span> <span class="n">health_cap</span>
  <span class="k">global</span> <span class="n">mana_cap</span>
  <span class="k">global</span> <span class="n">EXP</span>
  <span class="k">global</span> <span class="n">enemy_crit</span>
  <span class="k">global</span> <span class="n">print_crit</span>
  <span class="k">global</span> <span class="n">name_replace_health</span>
  <span class="c1">#Kills the player if they are less then 0 health</span>
  <span class="k">if</span> <span class="n">health</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">:</span>
      <span class="n">Dead</span> <span class="o">=</span> <span class="kc">True</span>
      <span class="n">users_turn</span> <span class="o">=</span> <span class="kc">False</span>
  <span class="n">clear_output</span><span class="p">(</span><span class="kc">True</span><span class="p">)</span>
  <span class="c1">#Asky art print v</span>
  <span class="nb">print</span><span class="p">()</span>
  <span class="n">name_replace_health</span> <span class="o">=</span> <span class="n">name_replace_health</span> <span class="o">-</span> <span class="n">damage</span>
  <span class="c1">#Displays your damage v</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You did: &quot;</span><span class="p">,</span> <span class="n">damage</span><span class="p">,</span> <span class="s2">&quot;damage&quot;</span><span class="p">)</span>
  <span class="k">if</span> <span class="n">print_crit</span> <span class="o">==</span> <span class="kc">True</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You got a critical hit!!!!&quot;</span><span class="p">)</span>
    <span class="n">print_crit</span> <span class="o">=</span> <span class="kc">False</span>
  <span class="n">damage</span> <span class="o">=</span> <span class="mi">0</span>
  <span class="k">if</span> <span class="n">name_replace_health</span> <span class="o">&gt;=</span> <span class="mi">1</span><span class="p">:</span>
    <span class="n">enemy_alive</span> <span class="o">=</span> <span class="kc">True</span>
  <span class="k">else</span><span class="p">:</span>
    <span class="n">clear_output</span><span class="p">(</span><span class="kc">True</span><span class="p">)</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You have defeted the enemy!&quot;</span><span class="p">)</span>
    <span class="n">EXP</span> <span class="o">=</span> <span class="n">EXP</span> <span class="o">+</span> <span class="n">enemy_EXP</span>
    <span class="n">damage</span> <span class="o">=</span> <span class="mi">1</span>
    <span class="n">enemy_alive</span> <span class="o">=</span> <span class="kc">False</span>
  <span class="n">dm</span> <span class="o">=</span> <span class="n">random</span><span class="o">.</span><span class="n">randrange</span><span class="p">(</span><span class="n">lower_dm</span><span class="p">,</span><span class="n">uper_dm</span><span class="p">)</span>
  <span class="k">if</span> <span class="n">enemy_crit</span> <span class="o">==</span> <span class="kc">True</span><span class="p">:</span>
    <span class="n">dm</span> <span class="o">=</span> <span class="n">dm</span> <span class="o">*</span> <span class="mi">2</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You got crit!!!!&quot;</span><span class="p">)</span>
    <span class="n">enemy_crit</span> <span class="o">=</span> <span class="kc">False</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You took: &quot;</span><span class="p">,</span> <span class="n">dm</span><span class="p">,</span> <span class="s2">&quot;damage&quot;</span><span class="p">)</span>
  <span class="n">health</span> <span class="o">=</span> <span class="n">health</span> <span class="o">-</span> <span class="n">dm</span>
  <span class="nb">print</span><span class="p">(</span><span class="n">enemy_name</span><span class="p">,</span><span class="s2">&quot;:&quot;</span><span class="p">,</span><span class="n">name_replace_health</span> <span class="p">,</span> <span class="s2">&quot;Your HP:&quot;</span><span class="p">,</span> <span class="n">health</span><span class="p">,</span><span class="s2">&quot;/&quot;</span><span class="p">,</span><span class="n">health_cap</span><span class="p">,</span> <span class="s2">&quot;Your Mana:&quot;</span><span class="p">,</span> <span class="n">mana</span><span class="p">,</span><span class="s2">&quot;/&quot;</span><span class="p">,</span><span class="n">mana_cap</span><span class="p">)</span>
  <span class="k">if</span> <span class="n">damage</span> <span class="o">==</span> <span class="mi">0</span> <span class="ow">and</span> <span class="n">Dead</span> <span class="o">==</span> <span class="kc">False</span><span class="p">:</span>
    <span class="n">Attack</span><span class="p">()</span>
  <span class="n">damage</span> <span class="o">=</span> <span class="mi">0</span>
  <span class="k">if</span> <span class="n">enemy_alive</span> <span class="o">==</span> <span class="kc">False</span><span class="p">:</span>
    <span class="n">name_replace</span> <span class="o">=</span> <span class="kc">False</span>
    <span class="n">Map</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

</div>
    {% endraw %}

</div>
 
