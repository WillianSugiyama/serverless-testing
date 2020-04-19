resource "aws_rds_cluster" "test-mysql" {
  cluster_identifier      = "test-cluster-demo"
  engine                  = "aurora-mysql"
  engine_version          = "5.7.mysql_aurora.2.03.2"
  database_name           = "testmysql"
  master_username         = "admin"
  master_password         = "admin123"
  db_subnet_group_name    = "${aws_db_subnet_group.rds-private-subnet.name}"
  vpc_security_group_ids  = ["${aws_security_group.rds-security-group.id}"]
  preferred_backup_window = "07:00-09:00"
  backup_retention_period = 5
}
