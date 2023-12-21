/*
1、SetUI.css
*/

(function ($) {
    /*---------------------------------------$.extend-------------------------------------------*/
    $.extend({
        initSetGlobal: SetGlobal, 
        iniEmbeded: SetEmbeded
    });

    
    var editorCode;
    var userParagraphEquation = true; 
    var useDefault = true; 
    var cutCopySaved = ""; 
    var useASCII = false; 
    var selectedDisplayEquation;  
    var ForDivURL; 
    var ForDivMathML; 

    function toMathML(jax, callback) {
       
    };

    function SetGlobal(aInputMath, aOutputMath, aEmbedCode, aDivURL,aDivMathML) {
        ForDivURL = aDivURL;
        ForDivMathML=aDivMathML;

        editorCode = CodeMirror.fromTextArea(document.getElementById(aInputMath), {
            lineWrapping: true,
            onChange: function () {
                var m = editorCode.getValue();
                $('#poutput').val(m); // added for QST
                convert();
            }
        });

        editorCode.focus();
        DisplayMathQST();
   
        function DisplayMathQST() {
            var m = editorCode.getValue();
            convertQST();
            }
        
        // Added for QST
        function convertQST() {
            var input = document.getElementById("poutput").value.trim();
            var inputt = '$$'+input+'$$'
            output = document.getElementById('output');
            output.style.display = "block";
            output.innerHTML = inputt;
            }
        
        
        function DisplayMath() {
            MathJax.Hub.Queue(function () {
                var s = "\<script type=\"text/javascript\" src=\"Math/MathJax.js?config=OK\"\>\</script\>";

                var math0 = MathJax.Hub.getAllJax(aOutputMath)[0];
                var math1 = MathJax.Hub.getAllJax(aOutputMath)[1];
                var m = editorCode.getValue();

                if (useASCII == true) {
                    s = "`" + m + "`" + "\r" + s;
                    math1.Text(m);
                } else {
                    if (userParagraphEquation == true) {
                        s = "\\[" + m + "\\]" + "\r" + s;
                    }
                    else {
                        s = "$$" + m + "$$" + "\r" + s;
                    }
                    math0.Text(m);
                };

            });
        }
    };

    function SetEmbeded(aShowHideEmbeded, aDivEmbed, aSelectEquation, aShowHideURL,aShowHideMathML) {
        selectedDisplayEquation = aSelectEquation;

        var beforeColor = "#2955A0";
        var afterColor = "#1E90FF";

        $("#" + aShowHideURL).bind("click", function () {
            $("#" + ForDivURL).toggle();
            if ($("#" + ForDivURL).css("display") === "none") {
                $(this).text("Show External URL");
                $(this).css("color", beforeColor);
            } else {
                $(this).text("Hide External URL");
                $(this).css("color", afterColor);

                if ($("#" + ForDivMathML).css("display") === "none") {
                } else {
                    $("#" + aShowHideMathML).click();
                }
                if ($("#" + aDivEmbed).css("display") === "none") {
                } else {
                    $("#" + aShowHideEmbeded).click();
                }
            }
        });
        $("#" + aShowHideURL).click(); 

        $("#" + aShowHideMathML).bind("click", function () {
            $("#" + ForDivMathML).toggle();
            if ($("#" + ForDivMathML).css("display") === "none") {
                $(this).text("Show MathML Code");
                $(this).css("color", beforeColor);
            } else {
                $(this).text("Hide MathML Code");
                $(this).css("color", afterColor);

                if ($("#" + ForDivURL).css("display") === "none") {
                } else {
                    $("#" + aShowHideURL).click();
                }
                if ($("#" + aDivEmbed).css("display") === "none") {
                } else {
                    $("#" + aShowHideEmbeded).click();
                }
            }
        });
        $("#" +aShowHideMathML).click(); 
        
        $("#" + aShowHideEmbeded).bind("click", function () {
            $("#" + aDivEmbed).toggle();
            if ($("#" + aDivEmbed).css("display") === "none") {
                $(this).text("Show Embeded Code");
                $(this).css("color", beforeColor);
            } else {
                $(this).text("Hide Embeded Code");
                $(this).css("color", afterColor);

                if ($("#" + ForDivURL).css("display") === "none") {
                } else {
                    $("#" + aShowHideURL).click();
                }
                if ($("#" + ForDivMathML).css("display") === "none") {
                } else {
                    $("#" + aShowHideMathML).click();
                }
            }
        });
        $("#" + aShowHideEmbeded).click(); 

        $("#" + aSelectEquation).change(function () {
            if ($("#" + aSelectEquation).get(0).selectedIndex == 0) {
                userParagraphEquation = true;
            }
            else {
                userParagraphEquation = false;
            }
            
            var m = editorCode.getValue();
            editorCode.setValue(m);
        });
    };
    /*---------------------------------------$.extend-------------------------------------------*/



    /*--------------------------------------Main-------------------------------------------*/
    $.fn.extend({
        initTool: SetTool,
        initMath: SetMath,
        initMath3528: SetMath3528,
        initMath3545: SetMath3545,
        initMathHeigh45: SetMathHeigh45,
        initFun: SetFun,
        initGreek: SetGreek,
        initLogic: SetLogic,
        initArrow: SetArrow,
        initSymbol: SetSymbol,
        initColor: SetColor,
        initFontStyle: SetFontStyle,
        initFontSize: SetFontSize
    });

    function SetTool() {
        priv.initToolBar(this, toolOptions, toolAction);

        
        var s = "#" + this[0].id + " ul li:has(a.UseDefaultValue)";
        $(s).addClass("CheckedStatus");

        $("#ForLatext").show();
        
        $("#ForASC").hide();
    };

    function SetMath() {
        priv.initToolBar(this, mathOptions, mathAction);
    };

    function SetMath3528() {
        priv.initToolBar(this, math3528Options, math3528Action);
    };

    function SetMath3545() {
        priv.initToolBar(this, math3545Options, math3545Action);
    };

    function SetMathHeigh45() {
        priv.initToolBar(this, mathHeigh45Options, mathHeigh45Action);
    };


    function SetFun() {
        priv.initToolBar(this, funOptions, funAction);
    };

    function SetGreek() {
        priv.initToolBar(this, greekOptions, greekAction);
    };

    function SetLogic() {
        priv.initToolBar(this, logicOptions, logicAction);
    };

    function SetArrow() {
        priv.initToolBar(this, arrowOptions, arrowAction);
    };

    function SetSymbol() {
        priv.initToolBar(this, symbolOptions, symbolAction);
    };

    function SetColor() {
        priv.initToolBar(this, colorOptions, colorAction);
    };

    function SetFontStyle() {
        priv.initToolBar(this, fontStyleOptions, fontStyleAction);
    };

    function SetFontSize() {
        priv.initToolBar(this, fontSizeOptions, fontSizeAction);
    };

    
    function InsertValue(aa) {
        editorCode.replaceSelection(aa, "end");
    };

    
    function InsertUseTitle(btn) {
        InsertValue(btn.title);
    };

    
    function InsertByDefault(haveDefaultValue,btn){
      if (useDefault){
        InsertValue(haveDefaultValue);
      }else{
        InsertValue(btn.title);
      }
    };

    
    function InsertColor(btn){
       var m = editorCode.getValue();
       m="\\color{"+btn.title+"} {"+m+"}";
       editorCode.setValue(m);
    };

    
    function InsertAtBegin(style){
      var m = editorCode.getValue();
      m=style+" "+m;
      editorCode.setValue(m);
    }

    var priv = {
        initToolBar: function (obj, options, todo) {

            var menuItem = function (className, altText, action) {
                return $("<li/>").append($("<a href='javascript:void(0);'/>").addClass(className).attr("title", altText).click(function () { action.call(this); }));
            };

            function addButtons(arr) {
                var ul = $("<ul/>").appendTo(obj);
                for (var i = 0; i < arr.length; i++) {
                    var e = arr[i];
                    if ((typeof (e)).toLowerCase() === "string") {
                        if (e === "|") {
                            ul.append($('<li class="separator"/>'));
                        } else {
                            var f = (function (e) {
                                return function () {
                                    todo[e](this, obj); 
                                    editorCode.focus();
                                };
                            })(e);
                            var t = options.toolbarText[e];
                            ul.append(menuItem(e, t || e, f));
                        }
                    } else {
                        ul.append(menuItem(e.css, e.text, e.action));
                    }
                }
            };
            for (var i = 0; i < options.toolbar.length; i++) {
                addButtons(options.toolbar[i]);
            }
        }
    };
    /*--------------------------------------Main-------------------------------------------*/


    /*--------------------------------------My Tools-------------------------------------------*/
    var toolOptions = {
        toolbar: [
          ["Undo", "Redo", "|", "Cut", "Copy", "Paste", "|",
           "UseDefaultValue", "|", "Asc", "|", "Clear"]
        ],
        toolbarText: {
            UseDefaultValue: "LaTeX, TeX Mode enabled",
            Asc: "ASCIIMath mode disabled"
        }
    };

    var toolAction = {
        Undo: function () {
            editorCode.undo();
        },
        Redo: function () {
            editorCode.redo();
        },

        Cut: function () {
            cutCopySaved = editorCode.getSelection();
            editorCode.replaceSelection("", "end");
        },

        Copy: function () {
            cutCopySaved = editorCode.getSelection();
        },

        Paste: function () {
            editorCode.replaceSelection(cutCopySaved, "end");
        },

        UseDefaultValue: function (btn, obj) {
            useDefault = !useDefault; 
            var s = "#" + obj[0].id + " ul li:has(a.UseDefaultValue)";
            if (useDefault == true) {
                $(s).addClass("CheckedStatus");
                $(btn).attr("title", "LaTeX, TeX Mode Enabled");
                $('#QSTTeX').val('1');
                
                // what text to show
                var u = document.getElementById("la_tex");
                var v = document.getElementById("as_cii");
                var w = document.getElementById("math_ml");
                u.style.display = "block";
                v.style.display = "none";
                w.style.display = "none";
                
                $("#" + selectedDisplayEquation).removeAttr("disabled");
                var t = "#" + obj[0].id + " ul li:has(a.Asc)";
                $(t).removeClass("CheckedStatus");
                $('#QSTAsc').val('0');
                convert();
            } else {
                $(s).removeClass("CheckedStatus"); //remove indent for latex.tex
                $(btn).attr("title", "LaTeX, TeX Mode Disabled");
                $('#QSTTeX').val('0');
        
                // what text to show
                var u = document.getElementById("la_tex");
                var v = document.getElementById("as_cii");
                var w = document.getElementById("math_ml");
                u.style.display = "none";
                v.style.display = "none";
                w.style.display = "block";
                
                var t = "#" + obj[0].id + " ul li:has(a.Asc)";
                $(t).removeClass("CheckedStatus"); //remove indent for asciimath
                $("#" + selectedDisplayEquation).removeAttr("disabled");
                $("#la_tex").val('0');
                $('#QSTAsc').val('0');
                convert();
            };
        },

        Asc: function (btn, obj) {
            useASCII = !useASCII;
            var s = "#" + obj[0].id + " ul li:has(a.Asc)";
            if (useASCII == true) {
                $(s).addClass("CheckedStatus");
                $(btn).attr("title", "AsciiMath mode enabled");
                $("#" + selectedDisplayEquation).attr("disabled", "disabled");
                $('#QSTAsc').val('1');
                $('#QSTTeX').val('0');
                $("#la_tex").val('0');

                // what text to show
                var u = document.getElementById("la_tex");
                var v = document.getElementById("as_cii");
                var w = document.getElementById("math_ml");
                u.style.display = "none";
                v.style.display = "block";
                w.style.display = "none";

                var y = "#" + obj[0].id + " ul li:has(a.UseDefaultValue)";
                $(y).removeClass("CheckedStatus");
                convert();
            } else {
                $(s).removeClass("CheckedStatus");
                $(btn).attr("title", "AsciiMath mode disabled");
                $("#" + selectedDisplayEquation).removeAttr("disabled");

                $('#QSTAsc').val('0');
                $('#QSTTeX').val('0');
                // what text to show
                var u = document.getElementById("la_tex");
                var v = document.getElementById("as_cii");
                var w = document.getElementById("math_ml");
                u.style.display = "none";
                v.style.display = "none";
                w.style.display = "block";
                
                var y = "#" + obj[0].id + " ul li:has(a.UseDefaultValue)";
                $(y).removeClass("CheckedStatus");

                $('#as_cii').val('0');
                $("#la_tex").val('0');
                convert();
            };

            
            var m = editorCode.getValue();
            editorCode.setValue(m);
           
        },

        Clear: function () {
            editorCode.setValue("");
        }
    };
    /*--------------------------------------My Tools-------------------------------------------*/


    /*--------------------------------------My Maths-------------------------------------------*/   
    /*--
    
    --*/  
    var mathOptions = {
        toolbar: [
          ["times", "div", "pm", "mp", "cdot", "star"
          ]
        ],
        toolbarText: {
            times: "\\times",
            div: "\\div",
            pm: "\\pm",
            mp: "\\mp",
            cdot: "\\cdot",
            ast: "\\ast",
            star: "\\star",
            odot: "\\odot",
            bigcirc: "\\bigcirc",
            dagger: "\\dagger",
            ddagger: "\\ddagger",
            amalg: "\\amalg"
        }
    };

    var mathAction = {
        times: InsertUseTitle,
        div: InsertUseTitle,
        pm: InsertUseTitle,
        mp: InsertUseTitle,
        cdot: InsertUseTitle,
        ast: InsertUseTitle,
        star: InsertUseTitle, 
        odot: InsertUseTitle,
        bigcirc: InsertUseTitle,
        dagger: InsertUseTitle,
        ddagger: InsertUseTitle,
        amalg: InsertUseTitle
    };
    /*--------------------------------------My Maths-------------------------------------------*/


    /*--------------------------------------My Maths3528----------------------------------------*/   
      var math3528Options = {
        toolbar: [
          ["sqrt", "sqrtn","log","lg","abUP", "abDown","UpAndDown", "widetilde", "widehat", "overleftarrow",
           "overrightarrow", "overbrace","underbrace","underline" , "overline"
          ]
        ],
        toolbarText: {  
          UpAndDown: "\\_{}^{}",
          log: "\\log_{}{}",
          lg:  "\\lg{}",
          sqrt: "\\sqrt{}",   
          sqrtn: "\\sqrt[]{}",
          widetilde: "\\widetilde{}",
          widehat:   "\\widehat{}",
          overleftarrow:  "\\overleftarrow{}",
          overrightarrow: "\\overrightarrow{}",
          overline:   "\\overline{}",
          overbrace:  "\\overbrace{}",
          underbrace: "\\underbrace{}",
          underline:  "\\underline{}",
          abUP:       "^{}",
          abDown:     "_{}"
        }
    };

    var math3528Action = { 
          UpAndDown:  function(btn){InsertByDefault("c_a^b",btn);},  
          log: function (btn){InsertByDefault("\\log_{a}{b}",btn);},  
          lg:  function (btn){InsertByDefault("\\lg{ab}",btn);},  
          sqrt: function (btn){InsertByDefault("\\sqrt{ab}",btn);},  
          sqrtn: function (btn){InsertByDefault("\\sqrt[n]{ab}",btn);},  
          widetilde: function (btn){InsertByDefault("\\widetilde{ab}",btn);}, 
          widehat:   function (btn){InsertByDefault("\\widehat{ab}",btn);}, 
          overleftarrow:   function (btn){InsertByDefault("\\overleftarrow{ab}",btn);}, 
          overrightarrow:  function (btn){InsertByDefault("\\overrightarrow{ab}",btn);}, 
          overline:        function (btn){InsertByDefault("\\overline{ab}",btn);}, 
          overbrace:       function (btn){InsertByDefault("\\overbrace{ab}",btn);}, 
          underbrace:      function (btn){InsertByDefault("\\underbrace{ab}",btn);}, 
          underline:       function (btn){InsertByDefault("\\underline{ab}",btn);}, 
          abUP:            function (btn){InsertByDefault("a^{b}",btn);}, 
          abDown:          function (btn){InsertByDefault("a_{b}",btn);}
    };
    /*--------------------------------------My Maths3528----------------------------------------*/     


    /*--------------------------------------My Maths3545----------------------------------------*/
    var math3545Options = {
        toolbar: [
          [
            "fracA","fracB","fracC","lim","intA","oint",
            "prod","coprod","bigcap","bigcup","bigvee","bigwedge","bigsqcup","sumA","arrayA"
          ]
        ],
        toolbarText: {  
          fracA:    "\\frac{}{}",
          fracB:    "\\frac{\\partial }{\\partial }",
          fracC:    "\\frac{\\text{d}}{\\text{d}}",
          lim:      "\\lim_{ \\rightarrow }", 
          intA:     "\\int_{}^{} ",
          oint:     "\\oint",
          sumA:     "\\sum",
          prod:     "\\prod",
          coprod:   "\\coprod",
          bigcap:   "\\bigcap",
          bigcup:   "\\bigcup", 
          bigvee:   "\\bigvee", 
          bigwedge: "\\bigwedge",         
          bigsqcup: "\\bigsqcup",           
          arrayA:  "\\left(\\begin{array}{c}\\\\ \\end{array}\\right)"
        }
    };

    var math3545Action = {  
        fracA:    function (btn){InsertByDefault("\\frac{ab}{cd}",btn);}, 
        fracB:    function (btn){InsertByDefault("\\frac{\\partial a}{\\partial b}",btn);}, 
        fracC:    function (btn){InsertByDefault("\\frac{\\text{d}x}{\\text{d}y}",btn);}, 
        lim:      function (btn){InsertByDefault("\\lim_{a \\rightarrow b}", btn);}, 
        intA:     function (btn){InsertByDefault("\\int_{a}^{b} ",btn);}, 
        sumA:     function (btn){InsertByDefault("\\sum_a^b",btn);}, 
        prod:     function (btn){InsertByDefault("\\prod_a^b",btn);}, 
        bigcap:   function (btn){InsertByDefault("\\bigcap_a^b ",btn);}, 
        bigvee:   function (btn){InsertByDefault("\\bigvee_a^b",btn);}, 
        oint:     function (btn){InsertByDefault("\\oint_a^b",btn);}, 
        bigsqcup: function (btn){InsertByDefault("\\bigsqcup_a^b",btn);}, 
        coprod:   function (btn){InsertByDefault("\\coprod_a^b",btn);}, 
        bigcup:   function (btn){InsertByDefault("\\bigcup_a^b", btn);}, 
        bigwedge: function (btn){InsertByDefault("\\bigwedge_a^b",btn);} ,
        arrayA:  function (btn){InsertByDefault("\\left(\\begin{array}{c}a\\\\ b\\end{array}\\right)",btn);}          
    };
    /*--------------------------------------My Maths3545----------------------------------------*/


    /*--------------------------------------My MathsHeigh45-------------------------------------*/
    var mathHeigh45Options = {
        toolbar: [
          [
           "bmatrix","casesA"
          ]
        ],
        toolbarText: {  
          bmatrix: "\\begin{bmatrix} &  \\\\ &  \\end{bmatrix}",
          casesA:  "\\begin{cases} &\\\\ & \\end{cases}"
        }
    };

    var mathHeigh45Action = {    
         bmatrix: function (btn){InsertByDefault("\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}",btn);},          
         casesA:  function (btn){InsertByDefault("\\begin{cases}a & x = 0\\\\b & x > 0\\end{cases}",btn);}          
    };
    /*--------------------------------------My MathsHeigh45-------------------------------------*/


    /*--------------------------------------My Fun-------------------------------------------*/
    var funOptions = {
        toolbar: [
          ["arccos", "arcsin", "arctan", "cos", "cosh", "cot", "coth", "csc", "sec", "sin", "sinh", "tan", "tanh"],
          ["exp", "log", "ln", "max", "min", "sup", "inf"],
          ["lim", "gcd", "hom", "ker", "det", "bmod"]
        ],
        toolbarText: {
            arccos: "\\arccos",
            arcsin: "\\arcsin",
            arctan: "\\arctan",
            cos: "\\cos",
            cosh: "\\cosh",
            cot: "\\cot",
            coth: "\\coth",
            csc: "\\csc",
            sec: "\\sec",
            sin: "\\sin",
            sinh: "\\sinh",
            tan: "\\tan",
            tanh: "\\tanh",
            exp: "\\exp",
            log: "\\log",
            ln: "\\ln",
            max: "\\max",
            min: "\\min",
            sup: "\\sup",
            inf: "\\inf",
            lim: "\\lim",
            gcd: "\\gcd",
            hom: "\\hom",
            ker: "\\ker",
            det: "\\det",
            bmod: "\\bmod"
        }
    };

    var funAction = {
        arccos: InsertUseTitle,
        arcsin: InsertUseTitle,
        arctan: InsertUseTitle,
        cos: InsertUseTitle,
        cosh: InsertUseTitle,
        cot: InsertUseTitle,
        coth: InsertUseTitle,
        csc: InsertUseTitle,
        sec: InsertUseTitle,
        sin: InsertUseTitle,
        sinh: InsertUseTitle,
        tan: InsertUseTitle,
        tanh: InsertUseTitle,
        exp: InsertUseTitle,
        log: InsertUseTitle,
        ln: InsertUseTitle,
        max: InsertUseTitle,
        min: InsertUseTitle,
        sup: InsertUseTitle,
        inf: InsertUseTitle,
        lim: InsertUseTitle,
        gcd: InsertUseTitle,
        hom: InsertUseTitle,
        ker: InsertUseTitle,
        det: InsertUseTitle,
        bmod: InsertUseTitle
    };
    /*--------------------------------------My Fun-------------------------------------------*/


    /*--------------------------------------My Greek-----------------------------------------*/
    var greekOptions = {
        toolbar: [
          ["alpha", "beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega"]
        ],
        toolbarText: {
            alpha: "\\alpha",
            beta: "\\beta",
            gamma:"\\gamma",
            delta:"\\delta",
            epsilon:"\\epsilon",
            zeta:"\\zeta",
            eta:"\\eta",
            theta:"\\theta",
            iota:"\\iota",
            kappa:"\\kappa",
            lambda:"\\lambda",
            mu:"\\mu",
            nu:"\\nu",
            xi:"\\xi",
            pi:"\\pi",
            rho:"\\rho",
            sigma:"\\sigma",
            tau:"\\tau",
            upsilon:"\\upsilon",
            phi:"\\phi",
            chi:"\\chi",
            psi:"\\psi",
            omega:"\\omega"
        }
    };

    var greekAction = {
        alpha: InsertUseTitle,
        beta: InsertUseTitle,
        gamma:InsertUseTitle,
        delta:InsertUseTitle,
        epsilon:InsertUseTitle,
        zeta:InsertUseTitle,
        eta:InsertUseTitle,
        theta:InsertUseTitle,
        iota:InsertUseTitle,
        kappa:InsertUseTitle,
        lambda:InsertUseTitle,
        mu:InsertUseTitle,
        nu:InsertUseTitle,
        xi:InsertUseTitle,
        pi:InsertUseTitle,
        rho: InsertUseTitle,
        sigma: InsertUseTitle,
        tau: InsertUseTitle,
        upsilon: InsertUseTitle,
        phi: InsertUseTitle,
        chi: InsertUseTitle,
        psi: InsertUseTitle,
        omega: InsertUseTitle
    };
    /*--------------------------------------My Greek-----------------------------------------*/


    /*--------------------------------------My Logic-----------------------------------------*/
    /*
     
    */
    var logicOptions = {
    toolbar: [
      ["neq", "leq", "geq",
      "sim", "approx", "cong", "equiv", "propto", "ll", "gg", 
      "in", "subset", "subseteq", "prec", "preceq",  "simeq", "asymp", "doteq", "succ",
      "succeq", "sqsubseteq","sqsupseteq", "ni", "models", "vdash","dashv",  "perp",
       "mid", "parallel", "smile", "frown", "bowtie", "unlhd", "unrhd"      
      ],
      [
        "hat","check","breve","acute","grave","tilde","bar","vec","dot","ddot"
      ]
    ],
    toolbarText: {
    neq: "\\neq",
    leq: "\\leq",
    geq: "\\geq",
    sim:"\\sim",
    approx:"\\approx",
    cong:"\\cong",
    equiv:"\\equiv",
    propto:"\\propto",
    ll:"\\ll",
    gg:"\\gg",
    implies:"\\implies",
    Leftrightarrow:"\\Leftrightarrow",
    rightleftharpoons:"\\rightleftharpoons",
    in:"\\in",
    subset:"\\subset",
    subseteq:"\\subseteq",
    prec:"\\prec",
    preceq:"\\preceq",
    sqsubseteq:"\\sqsubseteq",
    vdash:"\\vdash",
    simeq:"\\simeq",
    asymp:"\\asymp",
    doteq:"\\doteq",
    succ:"\\succ",
    succeq:"\\succeq",
    sqsupseteq:"\\sqsupseteq",
    ni:"\\ni",
    dashv:"\\dashv",
    models:"\\models",
    perp:"\\perp",
    mid:"\\mid",
    parallel:"\\parallel",
    smile:"\\smile",
    frown:"\\frown",
    bowtie:"\\bowtie",
    unlhd:"\\unlhd",
    unrhd:"\\unrhd",
    lhd:"\\lhd",
    rhd:"\\rhd",
    hat    : "\\hat{}",
    check  : "\\check{}",
    breve  : "\\breve{}",
    acute  : "\\acute{}",
    grave  : "\\grave{}",
    tilde  : "\\tilde{}",
    bar    : "\\bar{}",
    vec    : "\\vec{}",
    dot    : "\\dot{}",
    ddot   : "\\ddot{}"
    }
    };

    var logicAction = {
    neq: InsertUseTitle,
    leq: InsertUseTitle,
    geq: InsertUseTitle,
    sim: InsertUseTitle,
    approx: InsertUseTitle,
    cong: InsertUseTitle,
    equiv: InsertUseTitle,
    propto: InsertUseTitle,
    ll: InsertUseTitle,
    gg: InsertUseTitle,
    implies: InsertUseTitle,
    Leftrightarrow: InsertUseTitle,
    rightleftharpoons: InsertUseTitle,
    in: InsertUseTitle,
    subset: InsertUseTitle,
    subseteq: InsertUseTitle,
    prec: InsertUseTitle,
    preceq: InsertUseTitle,
    sqsubseteq: InsertUseTitle,
    vdash: InsertUseTitle,
    simeq: InsertUseTitle,
    asymp: InsertUseTitle,
    doteq: InsertUseTitle,
    succ: InsertUseTitle,
    succeq: InsertUseTitle,
    sqsupseteq: InsertUseTitle,
    ni: InsertUseTitle,
    dashv: InsertUseTitle,
    models: InsertUseTitle,
    perp: InsertUseTitle,
    mid: InsertUseTitle,
    parallel: InsertUseTitle,
    smile: InsertUseTitle,
    frown: InsertUseTitle,
    bowtie: InsertUseTitle,
    unlhd: InsertUseTitle,
    unrhd: InsertUseTitle,
    lhd: InsertUseTitle,
    rhd: InsertUseTitle,
    hat    : function (btn){InsertByDefault("\\hat{a}",btn);}, 
    check  : function (btn){InsertByDefault("\\check{a}",btn);}, 
    breve  : function (btn){InsertByDefault("\\breve{a}",btn);}, 
    acute  : function (btn){InsertByDefault("\\acute{a}",btn);}, 
    grave  : function (btn){InsertByDefault("\\grave{a}",btn);}, 
    tilde  : function (btn){InsertByDefault("\\tilde{a}",btn);}, 
    bar    : function (btn){InsertByDefault("\\bar{a}",btn);}, 
    vec    : function (btn){InsertByDefault("\\vec{a}",btn);}, 
    dot    : function (btn){InsertByDefault("\\dot{a}",btn);}, 
    ddot   : function (btn){InsertByDefault("\\ddot{a}",btn);}
    };
    /*--------------------------------------My Logic-----------------------------------------*/


    /*--------------------------------------My Arrow-----------------------------------------*/
   /*
      
    */
    var arrowOptions = {
        toolbar: [
          ["leftL", "rightL", "leftM", "rightM", "leftD", "rightD","lfloor","lceil","rfloor","rceil","langle","rangle","backslash",
           "cap", "cup", "uplus", "sqcap", "sqcup", "vee", "wedge", "wr"
          ],
          [
            "leftarrow","DLeftarrow","rightarrow","DRightarrow","leftrightarrow","DLeftrightarrow","mapsto","leftharpoonup","leftharpoondown","rightleftharpoons",
            "leftrightharpoons","hookrightarrow","rightharpoonup","uparrow","DUparrow","downarrow","DDownarrow","updownarrow","DUpdownarrow","leftleftarrows",
            "rightrightarrows","leftrightarrows","rightleftarrows","Lleftarrow","Rrightarrow","twoheadleftarrow","twoheadrightarrow","leftarrowtail",
            "rightarrowtail","looparrowleft","looparrowright","curvearrowleft","curvearrowright","circlearrowleft","circlearrowright","dashleftarrow","dashrightarrow",
            "Lsh","Rsh","upuparrows","downdownarrows","upharpoonleft","upharpoonright","downharpoonleft","downharpoonright","rightsquigarrow","leftrightsquigarrow",
             "multimap","nleftarrow","nrightarrow","DnLeftarrow", "DnRightarrow","nleftrightarrow","DnLeftrightarrow"           
          ]
        ],
        toolbarText: {            
            leftL: "\\left(",
            rightL: "\\right)",
            leftM: "\\left[",
            rightM: "\\right]",
            leftD: "\\left\\{",
            rightD: "\\right\\}",
            lfloor:"\\lfloor",
            lceil:"\\lceil",
            rfloor:"\\rfloor",
            rceil:"\\rceil",
            langle:"\\langle",
            rangle:"\\rangle",
            backslash:"\\backslash",
            cap: "\\cap",
            cup: "\\cup",
            uplus: "\\uplus",
            sqcap: "\\sqcap",
            sqcup: "\\sqcup",
            vee: "\\vee",
            wedge: "\\wedge",
            setminus: "\\setminus",
            wr: "\\wr",
            leftarrow:"\\leftarrow",
            DLeftarrow:"\\Leftarrow",     //Different
            rightarrow:"\\rightarrow",
            DRightarrow:"\\Rightarrow",     //Different
            leftrightarrow:"\\leftrightarrow",
            DLeftrightarrow:"\\Leftrightarrow",  //Different
            mapsto:"\\mapsto",
            leftharpoonup:"\\leftharpoonup",
            leftharpoondown:"\\leftharpoondown",
            rightleftharpoons:"\\rightleftharpoons",
            leftrightharpoons:"\\leftrightharpoons",
            hookrightarrow:"\\hookrightarrow",
            rightharpoonup:"\\rightharpoonup",
            uparrow:"\\uparrow",
            DUparrow:"\\Uparrow",   //Different
            downarrow:"\\downarrow",
            DDownarrow:"\\Downarrow",   //Different
            updownarrow:"\\updownarrow",
            DUpdownarrow:"\\Updownarrow",   //Different
            leftleftarrows:"\\leftleftarrows",
            rightrightarrows:"\\rightrightarrows",
            leftrightarrows:"\\leftrightarrows",
            rightleftarrows:"\\rightleftarrows",
            Lleftarrow:"\\Lleftarrow",
            Rrightarrow:"\\Rrightarrow",
            twoheadleftarrow:"\\twoheadleftarrow",
            twoheadrightarrow:"\\twoheadrightarrow",
            leftarrowtail:"\\leftarrowtail",
            rightarrowtail:"\\rightarrowtail",
            looparrowleft:"\\looparrowleft",
            looparrowright:"\\looparrowright",
            curvearrowleft:"\\curvearrowleft",
            curvearrowright:"\\curvearrowright",
            circlearrowleft:"\\circlearrowleft",
            circlearrowright:"\\circlearrowright",
            dashleftarrow:"\\dashleftarrow",
            dashrightarrow:"\\dashrightarrow",
            Lsh:"\\Lsh",
            Rsh:"\\Rsh",
            upuparrows:"\\upuparrows",
            downdownarrows:"\\downdownarrows",
            upharpoonleft:"\\upharpoonleft",
            upharpoonright:"\\upharpoonright",
            downharpoonleft:"\\downharpoonleft",
            downharpoonright:"\\downharpoonright",
            rightsquigarrow:"\\rightsquigarrow",
            leftrightsquigarrow:"\\leftrightsquigarrow",
            multimap:"\\multimap",
            nleftarrow:"\\nleftarrow",
            nrightarrow:"\\nrightarrow",
            DnLeftarrow:"\\nLeftarrow",   //Different
            DnRightarrow:"\\nRightarrow",   //Different
            nleftrightarrow:"\\nleftrightarrow",
            DnLeftrightarrow:"\\nLeftrightarrow" //Different
        }
    };

    var arrowAction = {
        leftL: InsertUseTitle,
        rightL: InsertUseTitle,
        leftM: InsertUseTitle,
        rightM: InsertUseTitle,
        leftD: InsertUseTitle,
        rightD:InsertUseTitle,
        lfloor:InsertUseTitle,
        lceil:InsertUseTitle,
        rfloor:InsertUseTitle,
        rceil:InsertUseTitle,
        langle:InsertUseTitle,
        rangle:InsertUseTitle,
        backslash:InsertUseTitle,
        cap: InsertUseTitle,
        cup: InsertUseTitle,
        uplus: InsertUseTitle,
        sqcap: InsertUseTitle,
        sqcup: InsertUseTitle,
        vee: InsertUseTitle,
        wedge: InsertUseTitle,
        setminus: InsertUseTitle,
        wr: InsertUseTitle,
        leftarrow: InsertUseTitle,
        DLeftarrow: InsertUseTitle,
        rightarrow: InsertUseTitle,
        DRightarrow: InsertUseTitle,
        leftrightarrow: InsertUseTitle,
        DLeftrightarrow: InsertUseTitle,
        mapsto: InsertUseTitle,
        leftharpoonup: InsertUseTitle,
        leftharpoondown: InsertUseTitle,
        rightleftharpoons: InsertUseTitle,
        leftrightharpoons: InsertUseTitle,
        hookrightarrow: InsertUseTitle,
        rightharpoonup: InsertUseTitle,
        uparrow: InsertUseTitle,
        DUparrow: InsertUseTitle,
        downarrow: InsertUseTitle,
        DDownarrow: InsertUseTitle,
        updownarrow: InsertUseTitle,
        DUpdownarrow: InsertUseTitle,
        leftleftarrows: InsertUseTitle,
        rightrightarrows: InsertUseTitle,
        leftrightarrows: InsertUseTitle,
        rightleftarrows: InsertUseTitle,
        Lleftarrow: InsertUseTitle,
        Rrightarrow: InsertUseTitle,
        twoheadleftarrow: InsertUseTitle,
        twoheadrightarrow: InsertUseTitle,
        leftarrowtail: InsertUseTitle,
        rightarrowtail: InsertUseTitle,
        looparrowleft: InsertUseTitle,
        looparrowright: InsertUseTitle,
        curvearrowleft: InsertUseTitle,
        curvearrowright: InsertUseTitle,
        circlearrowleft: InsertUseTitle,
        circlearrowright: InsertUseTitle,
        dashleftarrow: InsertUseTitle,
        dashrightarrow: InsertUseTitle,
        Lsh: InsertUseTitle,
        Rsh: InsertUseTitle,
        upuparrows: InsertUseTitle,
        downdownarrows: InsertUseTitle,
        upharpoonleft: InsertUseTitle,
        upharpoonright: InsertUseTitle,
        downharpoonleft: InsertUseTitle,
        downharpoonright: InsertUseTitle,
        rightsquigarrow: InsertUseTitle,
        leftrightsquigarrow: InsertUseTitle,
        multimap: InsertUseTitle,
        nleftarrow: InsertUseTitle,
        nrightarrow: InsertUseTitle,
        DnLeftarrow: InsertUseTitle,
        DnRightarrow: InsertUseTitle,
        nleftrightarrow: InsertUseTitle,
        DnLeftrightarrow: InsertUseTitle
    };
    /*--------------------------------------My Arrow-----------------------------------------*/



    /*--------------------------------------My Symbol-----------------------------------------*/
    
    /*--
    
    --*/    
    var symbolOptions = {
        toolbar: [
          [           
            "imath","jmath","ell","wp","Im","prime",
            "angle","flat","natural","sharp","S","checkmark","ulcorner",
            "urcorner","llcorner","lrcorner",
            "triangle","triangledown","triangleleft", "triangleright", "forall","exists","surd","top","bot",
            "heartsuit", "backprime","varnothing","sphericalangle",
            "nexists","Game","dotplus","ltimes","rtimes","Cap","Cup","leftthreetimes",
            "rightthreetimes","curlywedge","curlyvee", "Finv","diagup","diagdown","barwedge",
            "veebar","doublebarwedge","Box","boxplus", "boxminus","boxtimes","boxdot",
            "circledast","circledcirc","divideontimes","therefore","because",
            "oplus", "ominus", "otimes", "oslash","diamondsuit","diamond", "circ",
             "hslash","hbar","mho","infty","partial","eth",
            "blacktriangleleft","blacktriangleright","blacklozenge",
            "blacktriangle","blacktriangledown","blacksquare","clubsuit", "spadesuit", "bigstar","maltese"     
          ]
        ],
        toolbarText: {
            aleph: "\\aleph",
            hbar: "\\hbar",
            imath: "\\imath",
            jmath: "\\jmath",
            ell: "\\ell",
            wp: "\\wp",
            Re: "\\Re",
            Im: "\\Im",
            prime: "\\prime",
            emptyset: "\\emptyset",
            angle: "\\angle",
            flat: "\\flat",
            natural: "\\natural",
            sharp: "\\sharp",
            S: "\\S",
            checkmark: "\\checkmark",
            circ: "\\circ",
            diamond: "\\diamond",
            triangleleft: "\\triangleleft",
            triangleright: "\\triangleright",
            oplus: "\\oplus",
            ominus: "\\ominus",
            otimes: "\\otimes",
            oslash: "\\oslash",
            maltese: "\\maltese",
            ulcorner: "\\ulcorner",
            urcorner: "\\urcorner",
            diamond: "\\diamond",
            mho: "\\mho",
            ldots: "\\ldots",
            cdots: "\\cdots",
            infty: "\\infty",
            partial: "\\partial",
            nabla: "\\nabla",
            triangle: "\\triangle",
            forall: "\\forall",
            exists: "\\exists",
            neg: "\\neg",
            surd: "\\surd",
            top: "\\top",
            bot: "\\bot",
            clubsuit: "\\clubsuit",
            diamondsuit: "\\diamondsuit",
            heartsuit: "\\heartsuit",
            spadesuit: "\\spadesuit",
            circledR: "\\circledR",
            yen: "\\yen",
            llcorner: "\\llcorner",
            lrcorner: "\\lrcorner",
            Box: "\\Box",
            cdot: "\\cdot",
            vdots: "\\vdots",
            ddots: "\\ddots",
            hslash: "\\hslash",
            backprime: "\\backprime",
            varnothing: "\\varnothing",
            vartriangle: "\\vartriangle",
            triangledown: "\\triangledown",
            circledS: "\\circledS",
            bigstar: "\\bigstar",
            sphericalangle: "\\sphericalangle",
            nexists: "\\nexists",
            Game: "\\Game",
            dotplus: "\\dotplus",
            smallsetminus: "\\smallsetminus",
            ltimes: "\\ltimes",
            rtimes: "\\rtimes",
            Cap: "\\Cap",
            Cup: "\\Cup",
            boxplus: "\\boxplus",
            leftthreetimes: "\\leftthreetimes",
            rightthreetimes: "\\rightthreetimes",
            curlywedge: "\\curlywedge",
            curlyvee: "\\curlyvee",
            circleddash: "\\circleddash",
            blacktriangleleft: "\\blacktriangleleft",
            blacktriangleright: "\\blacktriangleright",
            blacktriangle: "\\blacktriangle",
            blacktriangledown: "\\blacktriangledown",
            square: "\\square",
            blacksquare: "\\blacksquare",
            lozenge: "\\lozenge",
            blacklozenge: "\\blacklozenge",
            complement: "\\complement",
            eth: "\\eth",
            Finv: "\\Finv",
            diagup: "\\diagup",
            diagdown: "\\diagdown",
            Bbbk: "\\Bbbk",
            barwedge: "\\barwedge",
            veebar: "\\veebar",
            doublebarwedge: "\\doublebarwedge",
            boxminus: "\\boxminus",
            boxtimes: "\\boxtimes",
            boxdot: "\\boxdot",
            circledast: "\\circledast",
            circledcirc: "\\circledcirc",
            divideontimes: "\\divideontimes",
            intercal: "\\intercal",
            therefore: "\\therefore",
            because: "\\because"
       }
    };

    var symbolAction = {
         aleph: InsertUseTitle,
         hbar: InsertUseTitle,
         imath: InsertUseTitle,
         jmath: InsertUseTitle,
         ell: InsertUseTitle,
         wp: InsertUseTitle,
         Re: InsertUseTitle,
         Im: InsertUseTitle,
         prime: InsertUseTitle,
         emptyset: InsertUseTitle,
         angle: InsertUseTitle,
         flat: InsertUseTitle,
         natural: InsertUseTitle,
         sharp: InsertUseTitle,
         S: InsertUseTitle,
         checkmark: InsertUseTitle,
         maltese: InsertUseTitle,
         ulcorner: InsertUseTitle,
         urcorner: InsertUseTitle,
         diamond: InsertUseTitle,
         mho: InsertUseTitle,
         ldots: InsertUseTitle,
         cdots: InsertUseTitle,
         infty: InsertUseTitle,
         partial: InsertUseTitle,
         nabla: InsertUseTitle,
         circ: InsertUseTitle,
         diamond: InsertUseTitle,
         triangleleft: InsertUseTitle,
         triangleright: InsertUseTitle,
         oplus: InsertUseTitle,
         ominus: InsertUseTitle,
         otimes: InsertUseTitle,
         oslash: InsertUseTitle,
         triangle: InsertUseTitle,
         forall: InsertUseTitle,
         exists: InsertUseTitle,
         neg: InsertUseTitle,
         surd: InsertUseTitle,
         top: InsertUseTitle,
         bot: InsertUseTitle,
         clubsuit: InsertUseTitle,
         diamondsuit: InsertUseTitle,
         heartsuit: InsertUseTitle,
         spadesuit: InsertUseTitle,
         circledR: InsertUseTitle,
         yen: InsertUseTitle,
         llcorner: InsertUseTitle,
         lrcorner: InsertUseTitle,
         Box: InsertUseTitle,
         cdot: InsertUseTitle,
         vdots: InsertUseTitle,
         ddots: InsertUseTitle,
         hslash: InsertUseTitle,
         backprime: InsertUseTitle,
         varnothing: InsertUseTitle,
         vartriangle: InsertUseTitle,
         triangledown: InsertUseTitle,
         circledS: InsertUseTitle,
         bigstar: InsertUseTitle,
         sphericalangle: InsertUseTitle,
         nexists: InsertUseTitle,
         Game: InsertUseTitle,
         dotplus: InsertUseTitle,
         smallsetminus: InsertUseTitle,
         ltimes: InsertUseTitle,
         rtimes: InsertUseTitle,
         Cap: InsertUseTitle,
         Cup: InsertUseTitle,
         boxplus: InsertUseTitle,
         leftthreetimes: InsertUseTitle,
         rightthreetimes: InsertUseTitle,
         curlywedge: InsertUseTitle,
         curlyvee: InsertUseTitle,
         circleddash: InsertUseTitle,
         blacktriangleleft: InsertUseTitle,
         blacktriangleright: InsertUseTitle,
         blacktriangle: InsertUseTitle,
         blacktriangledown: InsertUseTitle,
         square: InsertUseTitle,
         blacksquare: InsertUseTitle,
         lozenge: InsertUseTitle,
         blacklozenge: InsertUseTitle,
         complement: InsertUseTitle,
         eth: InsertUseTitle,
         Finv: InsertUseTitle,
         diagup: InsertUseTitle,
         diagdown: InsertUseTitle,
         Bbbk: InsertUseTitle,
         barwedge: InsertUseTitle,
         veebar: InsertUseTitle,
         doublebarwedge: InsertUseTitle,
         boxminus: InsertUseTitle,
         boxtimes: InsertUseTitle,
         boxdot: InsertUseTitle,
         circledast: InsertUseTitle,
         circledcirc: InsertUseTitle,
         divideontimes: InsertUseTitle,
         intercal: InsertUseTitle,
         therefore: InsertUseTitle,
         because: InsertUseTitle
    };
    /*--------------------------------------My Symbol-----------------------------------------*/


    /*--------------------------------------My Color-----------------------------------------*/
    var colorOptions = {
        toolbar: [
          [
            "aqua","black","blue","fuchsia","gray","green","lime","maroon",
            "navy","olive","orange","purple","red","silver","teal","yellow"
          ]
        ],
        toolbarText: {            
            aqua    : "aqua",    
            black   : "black",   
            blue    : "blue",     
            fuchsia : "fuchsia",  
            gray    : "gray",     
            green   : "green",    
            lime    : "lime",     
            maroon  : "maroon",   
            navy    : "navy",     
            olive   : "olive",    
            orange  : "orange",   
            purple  : "purple",   
            red     : "red",      
            silver  : "silver",   
            teal    : "teal",     
            yellow  : "yellow"  
        }
     };

     var colorAction = {
            aqua   : InsertColor,
            black : InsertColor,
            blue : InsertColor,
            fuchsia : InsertColor,
            gray : InsertColor,
            green : InsertColor,
            lime : InsertColor,
            maroon : InsertColor,
            navy : InsertColor,
            olive : InsertColor,
            orange : InsertColor,
            purple : InsertColor,
            red : InsertColor,
            silver : InsertColor,
            teal : InsertColor,
            yellow  : InsertColor  
     };
    /*--------------------------------------My Color-----------------------------------------*/


    /*--------------------------------------My FontStyle-------------------------------------*/
    var fontStyleOptions = {
        toolbar: [
          [
             "Bold","Italic","TrueType"
          ]
        ],
        toolbarText: {            
           Bold:  "Bold Font",
           Italic: "Italic Font",
           TrueType:"TrueType Font"
        }
    };

    var fontStyleAction = {
        Bold:     function (){ InsertAtBegin("\\bf");},   
        Italic:   function (){ InsertAtBegin("\\it");},  
        TrueType: function (){ InsertAtBegin("\\tt");} 
    };
    /*--------------------------------------My FontStyle-------------------------------------*/


    /*--------------------------------------My FontSize--------------------------------------*/
    var fontSizeOptions = {
        toolbar: [
          [
            "tiny", "scriptsize","small", "normalsize","large", "huge" 
          ]
        ],
        toolbarText: {            
           tiny: "Tiny Font",
           scriptsize: "Scriptsize Font",
           small: "Small Font", 
           normalsize: "Normalsize Font",
           large: "Large Font",
           huge: "Huge Font"
        }
    };

    var fontSizeAction = {
        tiny: function (){ InsertAtBegin("\\tiny");},
        scriptsize: function (){ InsertAtBegin("\\scriptsize");},
        small: function (){ InsertAtBegin("\\small");},
        normalsize: function (){ InsertAtBegin("\\normalsize");},
        large: function (){ InsertAtBegin("\\large");},
        huge: function (){ InsertAtBegin("\\huge");}
    };
    /*--------------------------------------My FontSize--------------------------------------*/

})(jQuery);
