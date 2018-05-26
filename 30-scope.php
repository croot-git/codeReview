<?php
class Difference{
    private $elements=array();
    public $maximumDifference;
    
    private $calcArr = array();

    function __construct($inputs) {
        
        $this->elements = $inputs;
        
    }

    public function ComputeDifference() {
        for($idx=0;$idx<ceil(sizeof($this->elements)/2);$idx++) {
            foreach($this->elements as $key=>$value) {
                array_push($this->calcArr,abs($this->elements[$idx]-$value));
            }
        }
        
        $this->maximumDifference = max($this->calcArr);
    }

} //End of Difference class  
     

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);

?>