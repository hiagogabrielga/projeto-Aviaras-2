-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carrinho` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `carrinho_id` INT NOT NULL,
  PRIMARY KEY (`id`, `carrinho_id`),
  INDEX `fk_usuarios_carrinho1_idx` (`carrinho_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_carrinho1`
    FOREIGN KEY (`carrinho_id`)
    REFERENCES `mydb`.`carrinho` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`livros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sinopse` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `preco` VARCHAR(45) NOT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_livros_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_livros_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`imagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`imagens` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `livros_id` INT NOT NULL,
  PRIMARY KEY (`id`, `livros_id`),
  INDEX `fk_imagens_livros_idx` (`livros_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagens_livros`
    FOREIGN KEY (`livros_id`)
    REFERENCES `mydb`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `texto` VARCHAR(45) NOT NULL,
  `livros_id` INT NOT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `livros_id`, `usuarios_id`),
  INDEX `fk_comentarios_livros1_idx` (`livros_id` ASC) VISIBLE,
  INDEX `fk_comentarios_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_comentarios_livros1`
    FOREIGN KEY (`livros_id`)
    REFERENCES `mydb`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentarios_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`livros_has_carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`livros_has_carrinho` (
  `livros_id` INT NOT NULL,
  `carrinho_id` INT NOT NULL,
  PRIMARY KEY (`livros_id`, `carrinho_id`),
  INDEX `fk_livros_has_carrinho_carrinho1_idx` (`carrinho_id` ASC) VISIBLE,
  INDEX `fk_livros_has_carrinho_livros1_idx` (`livros_id` ASC) VISIBLE,
  CONSTRAINT `fk_livros_has_carrinho_livros1`
    FOREIGN KEY (`livros_id`)
    REFERENCES `mydb`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_has_carrinho_carrinho1`
    FOREIGN KEY (`carrinho_id`)
    REFERENCES `mydb`.`carrinho` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
