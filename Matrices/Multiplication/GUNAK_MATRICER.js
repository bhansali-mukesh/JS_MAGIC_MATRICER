
var Matrix_Space_Div = "Matrix";
var Default_Content = "...";
var Default_Matric_Element_Value = "O";
var Table_Color = new Array("#286113","#AA8837","#624689","#FZAB60","ABCDEF","#FAB1A1","#BEEB&A","#C2AF2E","#131311","#10F1A0");

function  MATRICER()
{
	var Arm = 3;//parseInt(document.getElementById("ARM").value);
	var MATRICS_GENRATED = MATRICS_CALCULATOR(Arm);
	
	if( !(MATRICS_GENRATED === "-1") )
		MATRICER_SHOW_OFF(MATRICS_GENRATED);
}

function MATRICER_SHOW_OFF(MATRICS)
{
	var Division = document.getElementById(Matrix_Space_Div);								// Division like Construction, Preview, Solution
	if(Division != null)
	{
		var Table_String = '<table border="1" bordercolor=' + Table_Color[3] + '>';
		var Matrix_Length = MATRICS.length;

		for(var i = 0; i < Matrix_Length; i++ )
		{
			Table_String += '<tr>';
			for(var j = 0; j < Matrix_Length; j++)
			{
				TD_Id = (i*Matrix_Length)+j;
				Table_String += '<td style="white-space: nowrap;"  id="' + TD_Id + '" style="float:left;" width="35"><center>' + MATRICS[i][j] + '</center></td>';
			}
			Table_String += '</tr>';
		}
		Table_String += '</table>';
		Division.innerHTML = Table_String;
	}
	else
	{
		alert("No Area Assigned to Display. Missing Element " + Matrix_Space_Div);
	}
}

function MATRICS_CALCULATOR(Arm)
{	
	var number = document.getElementById("MULTI").value;
	number = Math.cbrt(number);
	var factorA = 1;
	var factorB = 1;

	for(var i=2; i<number; i++)
	{
		{
			if(number%i == 0)
			{	
				if(i * i == number) continue;
			
				factorA = factorB;
				factorB = i;

				if ( factorA * factorB == number)
					break;
			}
		}
	}
	
	//alert(factorA + " <A_B> " + factorB);
	{
		if( factorA == factorB )
		{
			factorA = 2;
			factorB = number/2;
			
			while( factorA == factorB || factorB == 1)
			{
				factorA *= 2;
				factorB /= 2;
			}
			//alert(factorA + " <A_B> " + factorB);
		}
	}
	
	var Display_Matrix = new Array();
	switch(Arm)
	{
		case 3:
				{
					var a3X3 = new Array
					(
						new Array(factorA * factorB * factorB, 1,factorA * factorA * factorB),
						new Array(factorA * factorA, factorA * factorB, factorB * factorB),
						new Array(factorB, factorA * factorA * factorB * factorB, factorA)
					);
					var Index_1 = 0;
					var Index_2;
					for(var i = 0; i < 3; i++ )
					{
						Display_Matrix[Index_1] = new Array();
						Index_2 = 0;
						for(var j = 0; j < 3 + Arm; j++)
						{
							Display_Matrix[Index_1][Index_2] = a3X3[i][j];
							Index_2++;
						}
						Index_1++;
					}
					return Display_Matrix;
				}
		case 0:
				return "-1";
		default:
				alert("YOU HAVE ENTERED A WRONG CHOICE. MATRIX NOT AVAILABLE.");
				return "-1";
	}
}

function  MATRICER()
{
	var Arm = 3;//parseInt(document.getElementById("ARM").value);
	var MATRICS_GENERATED = MATRICS_CALCULATOR(Arm);
	
	if( !(MATRICS_GENERATED === "-1") )
		MATRICER_SHOW_OFF(MATRICS_GENERATED);
}