var Matrix_Space_Div = "Matrix";
var Default_Content = "...";
var Default_Matric_Element_Value = "O";
var Table_Color = new Array("#286113","#AA8837","#624689","#FZAB60","ABCDEF","#FAB1A1","#BEEB&A","#C2AF2E","#131311","#10F1A0");

function  MATRICER()
{
	var Arm = parseInt(document.getElementById("ARM").value);
	var MATRICS_GENRATED = MATRICS_CALCULATOR(Arm);
	
	if( !(MATRICS_GENRATED === "-1") )
		MATRICER_SHOW_OFF(MATRICS_GENRATED);
}

function MATRICER_SHOW_OFF(MATRICS)
{
	var Division = document.getElementById(Matrix_Space_Div);								// Division like Construction, Preview, Solution
	if(Division != null)
	{
		var Table_String = '<table border="1" bordercolor=' + Table_Color[5] + '>';
		var Matrix_Length = MATRICS.length;

		for(var i = 0; i < Matrix_Length; i++ )
		{
			Table_String += '<tr>';
			for(var j = 0; j < Matrix_Length; j++)
			{
				TD_Id = (i*Matrix_Length)+j;
				Table_String += '<td style="white-space: nowrap;" id="' + TD_Id + '" style="float:left;" width="35" ><center>' + MATRICS[i][j] + '</center></td>';
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
	var Sum = document.getElementById("SUM").value;
	
	var number,choice;
	var middle = Sum/Arm;
	var Matricer_9X9;
	
	var Display_Matrix = new Array();
	
	switch(Arm)
	{
		case 1:
		case 3:
		case 5:
		case 7:
				{
					var a7X7 = new Array
					(
						new Array(middle + 19, middle + 19,middle - 26, middle -18, middle + 20, middle - 27, middle + 3),
						new Array(middle + 13, middle + 7, middle + 9, middle - 8, middle - 13, middle + 5, middle + 93),
						new Array(middle + 9, middle - 10, middle + 3, middle - 4, middle + 1, middle + 10, middle + 91),
						new Array(middle + 2, middle - 6, middle - 2, middle, middle + 2,middle + 6, middle + 6), 
						new Array(middle + 76, middle +14 , middle - 1, middle + 4, middle - 3, middle -14, middle + 8),
						new Array(middle + 39, middle - 5, middle - 9, middle + 8, middle + 13, middle - 7, middle + 0),
						new Array(middle + 91, middle - 19, middle + 26, middle + 18, middle - 20, middle + 27, middle + 439)
					);
					
					var dimension = parseInt((7 - Arm)/2);
					var Index_1 = 0;
					var Index_2;
					for(var i = dimension; i < dimension + Arm; i++ )
					{
						Display_Matrix[Index_1] = new Array();
						Index_2 = 0;
						for(var j = dimension; j < dimension + Arm; j++)
						{
							Display_Matrix[Index_1][Index_2] = a7X7[i][j];
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