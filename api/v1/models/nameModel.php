<?php

use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Database\Eloquent\Model;

class Name extends Illuminate\Database\Eloquent\Model
{
  protected $table = 'Name';
 
  /**
   * Indicates if the model should be timestamped.
   *
   * @var bool
   */
  public $timestamps = false; 
  /* 
  *  ACTION:    RETURN ALL NAMES OBJECT FROM DB
  *  IN:        
  *  OUT:       NAME'S OBJECT
  */
  public function getChartData()
  {
        
    $Name = new Name();
    
    $names =  DB::table('name')->select('Name', 'Vote')->get();

    return $names;
    
  }
  /* 
  *  ACTION:    ADD NEW NAME OBJECT
  *  IN:        NAME OBJECT
  *  OUT:       NEW OBJECT ID
  */
  public function addName($nameObj){
    
    echo("Add name");
   
    $name = new Name();
    
    $name->CreationDate   = $nameObj["CreationDate"];
    $name->Exclude        = $nameObj["Exclude"];  
    $name->Name           = $nameObj["Name"];
    $name->Vote           = $nameObj["Vote"];
    $name->UserCreator    = $nameObj["UserCreator"];
    $name->Email          = $nameObj["Email"];

    $name->save();
         
    return $name->id;
  }
  /* 
  *  ACTION:    ADD VOTE
  *  IN:        NAME'S ID
  *  OUT:       NEW NAME OBJECT
  */
  public function addVote($id)
  {
    
    echo($id);
    
    $name = new Name();
    
    $vote = $name->select("vote")->where("id","=", $$id)->get();

    DB::table('Names')
            ->where('id', $id)
            ->update(['Votes' => $vote + 1]);
   
    return $name;
    
  }
  /* 
  *  ACTION:    RETURN ALL NAMES OBJECT FROM DB
  *  IN:        
  *  OUT:       NAME'S OBJECT
  */
  public function getNames()
  {
        
    $Name = new Name();
    
    $names =  DB::table('name')->get();

    return $names;
    
  }
  /* 
  *  ACTION:    VERIFY IF THE NEWNAME ALREADY EXISTS IN DB
  *  IN:        NEWNAM
  *  OUT:       STATUS : 0 -> NO ; 1 -> YES
  */
  public function DuplicatedName($newName)
  {
    $Name = new Name();
    
    if (!empty( $newName)) { 
      
      $names = $Name->select("id")->where("Name","like", $newName)->get();   
      
      if(empty($names[0])) { // NEWNAME DOESNT EXIST
        
        return 0;
      } 
      else{ //NEWNAME ALREADY EXISTS
        echo($Names[0]);
        return 1;
      }                  
    } 
    else
    { //NEWNAME IS EMPTY
      return 0;
    }         
  }
  
}