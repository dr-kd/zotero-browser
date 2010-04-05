<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Zotero Browser</title>
		<link rel="stylesheet" type="text/css" media="all" href="../static/css/elastic.css" />
		<link rel="stylesheet" type="text/css" media="all" href="../static/css/RMSforms-v0.5.css" />
		<link rel="stylesheet" type="text/css" media="all" href="../static/css/local.css" />
		<script src="../static/js/jquery.js" type="text/javascript" language="javascript" charset="utf-8"></script>
		<script src="../static/css/elastic.js" type="text/javascript" language="javascript" charset="utf-8"></script>
        <script src="../static/js/jquery-1.4.2.min.js" type="text/javascript"></script>
        <script src="../static/js/jquery.jqote2.min.js" type="text/javascript"></script>
    </head>
    <body>
            <h1 style="background: white">Annotated bibliography search criteria</h1>
            <ul class="form hiv">
            <form name="bib_search"  action="search.sjs" method="get">
                <fieldset>
                <input name="submit" type="submit" value="Do Search">
                </fieldset></li>			

		<div class="columns on-2" style="background:white">
			<div class="container">
				<div class="column">
					<div class="container">
                    <li><fieldset>
                    <legend>Tags to search for (AND only) </legend>
                    <?sjs pow_include('lib/get_tags.js') ; ?> 
                    </fieldset></li>
                                        </div>
				</div>
				<div class="column">
					<div class="container">
                    <li><fieldset>
                    <legend>Collections to search in (AND only)</legend>
                    <?sjs pow_include('lib/get_collections.js'); ?>
                    </fieldset></li>
                                        </div>
                <fieldset>
                <input name="submit" type="submit" value="Do Search">
                </fieldset></li>			
				</div>
			</div>
		</div>
                <li>
</ul></form>

    <div class="columns on-2">
        <div class="container">

            <div class="column">
                <div class="container">
                </div>
            </div>
            <div class="column">
                <div class="container">
                </div>
            </div>

                </form>

        </div>
    </div>
    </body>
</html>
