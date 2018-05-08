
$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);

for($i=1;$i<=10;$i++) {
    $sum = $n*$i;
    print "$n x $i = $sum \n";
}