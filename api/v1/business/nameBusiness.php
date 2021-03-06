<?php
require_once _APP . "/models/nameModel.php";

class NameBusiness {
	
	
	 /* 
	  *  ACTION:    RETURN ALL NAMES OBJECT FROM DB
	  *  IN:        
	  *  OUT:       NAME'S OBJECT
	  */
	public function getNames(){
      // INSTANCIATE NAMES CLASS
      $name = new Name();
      // DO THE SEARCH
      $result =  $name->getNames();	
	  // RETURN RESULT
	  return $result;
	}	

	 /* 
	  *  ACTION:    RETURN ALL NAMES OBJECT FROM DB
	  *  IN:        
	  *  OUT:       NAME'S OBJECT
	  */
	public function getChartData(){
      // INSTANCIATE NAMES CLASS
      $name = new Name();
      // GET THE DATA
      $result =  $name->getChartData();	
	  // RETURN RESULT
	  return $result;
	}
		 /* 
	  *  ACTION:    RETURN ALL NAMES OBJECT FROM DB
	  *  IN:        
	  *  OUT:       NAME'S OBJECT
	  */
	public function addVote($id){
      // INSTANCIATE NAMES CLASS
      $name = new Name();
      // GET THE DATA
      $result =  $name->addVote();	
	  // RETURN RESULT
	  return $result;
	}		
	/*
	* AÇÃO:    
	* ENTRADA: 
	* SAIDA:   
	*/
	public function addName($postName){
	
		// CRIA PRODUTO
		$produto = validaCriacaoProduto($postProduto);
		// CRIA PRODUTODETALHE  (ARRAY OU NÃO)
		$produtoDetalhe = validaCriacaoProdutoDetalhe($postProduto);
		// INSTANCIA O MODELO PRODUTO
		$produtos = new Produto();
		// VEFICA SE HA DADOS VÁLIDOS DO PRODUTO
		$validoProduto($produto);
		$validPoordutoDetalhe($produtoDetalhe);
		// SALVA PRODUTO
		if($validoProduto and $validPoordutoDetalhe){
			
			$produtoID = $produtos.insertProduto($produto);
			
			if($produtoID > 0){
				$produtoPost["idProduto"] = $produtoid;
				$produtoDetalheID = $produtos.insertProdutoDetalhe($produtoDetalhe);
				
				if($produtoDetalheID > 0){
					$retorno = array( 'mensagem'=> '2 - Não foi possível salvar o produto detalhe',
							  'status' => '500');
				}
				else{
					$retorno = array( 'mensagem'=> 'Cadastro realizado com sucesso!',
							  'status' => '200');
				}
			}
			else{
				$retorno = array( 'mensagem'=> '1 - Não foi possível salvar o produto',
							  'status' => '500');
			}
			
		}
		else{
			$retorno = array( 'mensagem'=> 'dados enviados não estão de acordo com o formato dos campos',
							  'status' => '403');
		}
		
		return $retorno;
		// SALVA DETALHE PRODUTO
	}
	
	public function validaCriacaoProduto($produto){
		// CONFIGURE DATETIME
		$date = date('m/d/Y h:i:s a', time());
		// CRIATE A ARRAY AND RETURN IT
		return array(
			'idEmpresa'           => $this->app->request->params("idEmpresa", false),
			'idMarca'             => $this->app->request->params("idMarca", false),
			'idSubCategoria'      => $this->app->request->params("idSubCategoria", false),
			'idGenero'            => $this->app->request->params("idGenero", false),
			'idAutor'             => $this->app->request->params("idAutor", false),
			'titulo'              => $this->app->request->params("titulo", false),
			'descricao'           => $this->app->request->params("descricao", false),
			'dataAlteracao'       => $date,
			'dataCriacao'         => $date,
			'excluido'            => 0				
		);
	}	
	
	public function validaCriacaoProdutoDetalhe($produto){
		// CONFIGURE DATE AND TIME
		$date = date('m/d/Y h:i:s a', time());
		// DECLARE AN ARRAY;
		$produtosDetalhe;
		foreach	($produto as $obj){
		// CRIATE A NEW ARRAY ITEM TO ADD IN A ARRAY COLLECTION
		// http://php.net/manual/pt_BR/function.array-push.php
		array_push($produtosDetalhe, array(
			'quantidade'        => $obj->app->request->params("quantidade", false),
			'cor'             	=> $obj->app->request->params("cor", false),
			'tamanho'      		=> $obj->app->request->params("tamanho", false),
			'valor'            	=> $obj->app->request->params("valor", false),
			'idProduto'         => 0,
			'dataAlteracao'     => $date,
			'dataCriacao'       => $date,
			'excluido'          => 0
			));
		};
		
		return $produtoDetalhe;
	}
	
	public function validaDados($validar){
		// VALIDA OS INT
		
		// VALIDA STRING
		
		// VALIDA SQL INJECTION
		
	}
	
}